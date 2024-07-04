import { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import { GridToolbar } from "@mui/x-data-grid";

export default function Table({ rows, updateData, deleteData }) {
  const StyledDataGrid = styled(DataGrid)({
    border: "none", // Remove the border
    "& .MuiDataGrid-root": {
      border: "none", // Remove border from the root element
    },
    "& .MuiDataGrid-columnsContainer": {
      borderBottom: "none", // Remove the border at the bottom of columns
    },
    "& .MuiDataGrid-row": {
      border: "none", // Remove border around rows
    },
    "& .MuiDataGrid-cell": {
      display: "flex",
      // justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      color: "oklch(var(--bc))",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      color: "oklch(var(--p))",
      fontSize: "15px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& ::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "& ::-webkit-scrollbar-track": {
      backgroundColor: "#ffffff",
    },
    "& ::-webkit-scrollbar-thumb": {
      backgroundColor: "oklch(var(--p))",
    },

    // borderRadius: "12px", // Set the border radius for the entire DataGrid
  });

  interface RowType {
    id: number;
    desc: string;
    amount: number;
    use_type: string;
  }

  return (
    <div
      className={`text-base-content bg-base-100 shadow-md rounded-xl mb-12 z-50`}
    >
      {/* <StyledDataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        getRowHeight={() => "auto"}
        sx={{
          // backgroundColor: "oklch(var(--b1))",
          color: "oklch(var(--bc))",
          fontWeight: "bold",
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid oklch(var(--b3))",
            borderTop: "1px solid oklch(var(--b3))",
          },
          "& .MuiDataGrid-columnHeader": {
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "oklch(var(--b1))",
            borderRight: "1px solid oklch(var(--b3))",
            borderTop: "1px solid oklch(var(--b3))",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },

          "& .MuiDataGrid-scrollbar": {
            backgroundColor: "oklch(var(--b))",
          },

          " & .MuiTablePagination-root": {
            color: "oklch(var(--bc))",
          },
          " & .MuiSvgIcon-root ": {
            color: "oklch(var(--bc))",
          },
          "& .MuiButton-text": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
          },
          " & .MuiDataGrid-scrollbarFiller": {
            backgroundColor: "oklch(var(--b1))",
          },
          "& .MuiTablePagination-selectLabel": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
          },
          "& .MuiTablePagination-displayedRows": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
          },
          "& .MuiSelect-select": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
          },
          "& .MuiInputBase-root": {
            color: "oklch(var(--bc))",
            // bgcolor: "oklch(var(--b2))",
            fontWeight: "bold",
            // border: "1px solid oklch(var(--b3))",
          },
          "& .MuiDataGrid-filler": {
            backgroundColor: "oklch(var(--b1))",
          },

          height: 400,
        }}
      /> */}
      <div className="overflow-auto max-h-[50vh]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th className="text-center">ID</th> */}
              <th className="text-center">Description</th>
              <th className="text-center">Amout</th>
              <th className="text-center">Use Type</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row: RowType) => (
              <tr key={row.id}>
                <>
                  {/* <td>{row.id}</td> */}
                  <td>{row.desc}</td>
                  <td className="text-primary font-bold">{row.amount}</td>
                  <td
                    className={`font-bold ${
                      row.use_type === "income"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  >
                    {row.use_type.toUpperCase()}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        updateData(row.id);
                      }}
                      className="btn btn-sm btn-info"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10h-2a8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8V2m6.78 1a.69.69 0 00-.48.2l-1.22 1.21 2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38-2.5-2.5z" />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteData(row.id);
                      }}
                      className="btn btn-error btn-sm"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M7 6V3a1 1 0 011-1h8a1 1 0 011 1v3h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" />
                      </svg>
                    </button>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
