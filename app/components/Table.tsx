import React from "react";
import styled from "@emotion/styled";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)({
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    color: "#3371ff",
    fontSize: "14px",
  },
  "& ::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "& ::-webkit-scrollbar-track": {
    backgroundColor: "#ffffff",
  },
  "& ::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
  },
  borderRadius: "16px",
});

export default function Table() {
  return (
    <>
      <div className={`duration-300`}>
        <StyledDataGrid
          rows={[]}
          columns={[]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          sx={{
            height: 500,
          }}
        />
      </div>
    </>
  );
}
