"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Swal from "sweetalert2";
import { enqueueSnackbar } from "notistack";

//! Components
import SelectType from "@/app/components/SelectType";
import Table from "@/app/components/Table";
import Chart from "@/app/components/Chart";
import DialogExpense from "@/app/components/DialogExpense";
import DialogIncome from "@/app/components/DialogIncome";

const supabase = createClient();

function page() {
  //! States & Interfaces
  interface DataInterface {
    desc: string;
    amount: number;
    useType: string;
    userEmail: string;
  }

  interface TableInterface {
    id: number;
    desc: string;
    amount: number;
    useType: string;
    userEmail: string;
  }

  const [data, setData] = useState<DataInterface>({
    desc: "",
    amount: 0,
    useType: "",
    userEmail: "",
  });

  const [tableData, setTableData] = useState<TableInterface[]>([]);
  const [chartData, setChartData] = useState<TableInterface[]>([]);
  const [sumAmount, setSumAmount] = useState<number>(0);

  // State reload tableData when function success
  const [isTable, setIsTable] = useState<boolean>(false);

  // Select useType from SelectType component
  const [selectType, setSelectType] = useState<string>("");

  //! Fetch
  //* Get User Email From Auth
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      setData((prevData: DataInterface) => ({
        ...prevData,
        userEmail: data.user?.email || "",
      }));
    };

    fetchUser();
  }, []);

  console.log("user email", data.userEmail);

  //! Function
  //* Add Data
  // Add amout, desc, useType, userEmail with insert rows to database
  const addData = async (desc: string, amount: number, useType: string) => {
    try {
      setIsTable(true);
      const { data: insertData, error } = await supabase
        .from("record_list")
        .insert([
          {
            desc: desc,
            amount: amount,
            use_type: useType,
            user_email: data.userEmail,
          },
        ]);

      console.log(insertData);

      if (error) {
        console.error("Error inserting data:", error);
        return;
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      setIsTable(false);
    }
  };

  //* Select Data
  // Select Data from database table name "record_list" with filter where user_email is equal to data.userEmail & use_type is equal to selectType
  useEffect(() => {
    const selectData = async () => {
      if (!data.userEmail) {
        console.error("User email is not set");
        return;
      }

      // Start building the query
      let query = supabase
        .from("record_list")
        .select("*")
        .eq("user_email", data.userEmail);

      // Conditionally add the filter for use_type if selectType is not an empty string
      if (selectType !== "") {
        query = query.eq("use_type", selectType);
      }

      // Finalize the query by adding the order clause
      query = query.order("created_at", { ascending: false });

      // Execute the query
      const { data: selectedData, error } = await query;

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      setTableData(selectedData);
      setChartData(selectedData);

      // Calculate sum of amount based on use_type
      const sum = selectedData.reduce((acc, curr) => {
        if (curr.use_type === "income") {
          return acc + curr.amount;
        } else {
          return acc - curr.amount;
        }
      }, 0);

      setSumAmount(sum);
    };

    selectData();
  }, [data.userEmail, isTable, selectType]);

  //* Delete Data
  // Delete Data from database table name "record_list" with filter where id is equal to id
  const deleteData = async (id: number) => {
    // Display confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // Check if user confirmed deletion
    if (result.isConfirmed) {
      // Perform deletion
      setIsTable(true);
      const { data: deleteData, error } = await supabase
        .from("record_list")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting data:", error);
        await Swal.fire("Error", "Failed to delete data", "error");
        return;
      }

      console.log(deleteData);
      await Swal.fire("Deleted!", "Your data has been deleted.", "success");
      setIsTable(false);
    }
  };

  //* Update Data
  // Update Data from database table name "record_list" with filter where id is equal to id
  const updateData = async (id: number) => {
    // Await the fetch of showDataUpdate
    const showDataUpdate = await getShowDataUpdate(id);

    // Display SweetAlert input form
    const { value: formValues } = await Swal.fire({
      title: "Update Data",
      html: `
        <div> 
          <p>Description: <span style="color: oklch(var(--p));">${showDataUpdate.desc}</span></p><br>
          <p>Amount: <span style="color: oklch(var(--p));">${showDataUpdate.amount}</span></p><br>
        </div>
        <input id="desc" class="swal2-input" placeholder="Description" value="${showDataUpdate.desc}">
        <input id="amount" type="number" class="swal2-input" placeholder="Amount" value="${showDataUpdate.amount}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const desc = (
          document.getElementById("desc") as HTMLInputElement
        ).value.trim();
        const amount = Number(
          (document.getElementById("amount") as HTMLInputElement).value
        );

        if (!desc || amount <= 0 || isNaN(amount)) {
          Swal.showValidationMessage("Input invalid");
          return null;
        }

        return { desc, amount };
      },
    });

    if (formValues) {
      setIsTable(true);
      const { desc, amount } = formValues;

      const { data: updatedData, error } = await supabase
        .from("record_list")
        .update({
          desc: desc,
          amount: amount,
        })
        .eq("id", id);

      if (error) {
        console.error("Error updating data:", error);
        await Swal.fire("Error", "Failed to update data", "error");
        setIsTable(false);
        return;
      }

      console.log(updatedData);
      await Swal.fire("Updated!", "Your data has been updated.", "success");
      setIsTable(false);
    }
  };

  //* fetch showDataUpdate
  const getShowDataUpdate = async (id: number) => {
    // Replace with your actual fetch logic
    const { data, error } = await supabase
      .from("record_list")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching showDataUpdate:", error);
      throw error;
    }

    return data;
  };

  console.log("sumAmount", sumAmount);

  return (
    <>
      {data.userEmail ? (
        <div className="grid grid-cols-1 h-full gap-12 lg:my-auto mx-2 pt-4 z-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full my-12">
            <Chart data={chartData} />
            <div className="grid grid-cols-1 gap-2 animate-in">
              <SelectType value={selectType} setValue={setSelectType} />
              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <div className="flex justify-between my-auto">
                    <div className="grid">
                      <h2 className="card-title text-sm">
                        {selectType !== "" ? "Total" : "Balance"}
                      </h2>

                      <p className="font-bold flex">
                        <span
                          className={`text-2xl my-auto ${
                            sumAmount < 0 ? "text-error" : "text-success"
                          }`}
                        >
                          {sumAmount ? sumAmount : 0}
                        </span>

                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          width="1.5rem"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M8 6h5a3 3 0 013 3v.143A2.857 2.857 0 0113.143 12H8M8 12h5a3 3 0 013 3v.143A2.857 2.857 0 0113.143 18H8M8 6v12M11 4v2M11 18v2" />
                        </svg>
                      </p>
                    </div>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      width="3rem"
                      className={`${
                        sumAmount < 0
                          ? "text-error animate-pulse"
                          : "text-success"
                      }`}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M15 11v.01M5.173 8.378a3 3 0 114.656-1.377" />
                      <path d="M16 4v3.803A6.019 6.019 0 0118.658 11h1.341a1 1 0 011 1v2a1 1 0 01-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 01-3 0v-.583a6.04 6.04 0 01-1 .083h-4a6.04 6.04 0 01-1-.083v.583a1.5 1.5 0 01-3 0v-2L5 17.473A6 6 0 018.999 7h2.5l4.5-3H16z" />
                    </svg>
                  </div>
                  <div className="card-actions justify-start">
                    <button
                      onClick={() => {
                        const modalAddIncome =
                          document.getElementById("modal_add_income");
                        if (modalAddIncome) {
                          (modalAddIncome as HTMLDialogElement).showModal();
                        }
                      }}
                      className="btn btn-sm btn-success"
                    >
                      Income
                    </button>
                    <button
                      onClick={() => {
                        const modalAddExpense =
                          document.getElementById("modal_add_expense");
                        if (modalAddExpense) {
                          (modalAddExpense as HTMLDialogElement).showModal();
                        }
                      }}
                      className="btn btn-sm btn-warning"
                    >
                      Expense
                    </button>
                  </div>
                </div>
              </div>

              <Table
                rows={tableData}
                updateData={updateData}
                deleteData={deleteData}
              />
            </div>
          </div>

          <DialogIncome addData={addData} />
          <DialogExpense addData={addData} />
        </div>
      ) : (
        <div className="grid justify-center my-24 gap-4 items-center">
          <h1 className="text-xl text-center">
            Please login to view dashboard
          </h1>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default page;
