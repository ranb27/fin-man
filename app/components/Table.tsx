import { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import { GridToolbar } from "@mui/x-data-grid";

export default function Table() {
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
      fontFace: "Poppins", // Note: Corrected property name to lowercase 'fontFace'
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      color: "oklch(var(--p))",
      fontSize: "15px",
      textAlign: "center",
      fontFace: "Poppins", // Note: Corrected property name to lowercase 'fontFace'
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

  return (
    <div className={`text-base-content bg-base-100 grid grid-cols-1 `}>
      <StyledDataGrid
        rows={[]}
        columns={[]}
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
            fontFamily: "'Poppins' , 'sans-serif'",
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
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiDataGrid-toolbarContainer": {
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiDataGrid-scrollbar": {
            backgroundColor: "oklch(var(--b))",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          " & .MuiDataGrid-footerContainer": {
            fontFamily: "'Poppins' , 'sans-serif'",
            // bgcolor: "oklch(var(--b2))",
          },
          " & .MuiTablePagination-root": {
            color: "oklch(var(--bc))",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          " & .MuiSvgIcon-root ": {
            color: "oklch(var(--bc))",
          },
          "& .MuiButton-text": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          " & .MuiDataGrid-scrollbarFiller": {
            backgroundColor: "oklch(var(--b1))",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiTablePagination-selectLabel": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiTablePagination-displayedRows": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiSelect-select": {
            color: "oklch(var(--bc))",
            fontWeight: "bold",
            fontFamily: "'Poppins' , 'sans-serif'",
          },
          "& .MuiInputBase-root": {
            color: "oklch(var(--bc))",
            // bgcolor: "oklch(var(--b2))",
            fontWeight: "bold",
            fontFamily: "'Poppins' , 'sans-serif'",
            // border: "1px solid oklch(var(--b3))",
          },
          "& .MuiDataGrid-filler": {
            backgroundColor: "oklch(var(--b1))",
          },

          height: 400,
        }}
      />
    </div>
  );
}
