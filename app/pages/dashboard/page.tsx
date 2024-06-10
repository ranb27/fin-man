"use client";

import React, { useState, useEffect } from "react";

//! Components
import Month from "@/app/components/Month";
import Table from "@/app/components/Table";
import Chart from "@/app/components/Chart";

function page() {
  return (
    <div className="grid grid-cols-1 h-full gap-12 my-auto mx-2">
      <div className="flex justify-end mt-4">
        <Month />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <Chart />
        <div className="grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="card bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Input Amount</h3>
                  <p className="py-4">Waiting Content</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-error">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

            <div className="card bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Input Amount</h3>
                <p className="py-4">Waiting Content</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-error">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className="mb-10">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
