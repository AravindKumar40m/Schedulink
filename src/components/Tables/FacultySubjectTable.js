import React from "react";
import { AgGridReact } from "ag-grid-react";

const FacultySubjectTable = ({
  subfac_Ref,
  overallcolumns,
  subfac,
  defaultColDef,
  getRowData,
}) => {
  return (
    <div>
      <h3>Overall-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          ref={subfac_Ref}
          columnDefs={overallcolumns}
          rowData={subfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
          // onGridReady={onGridReady}
        ></AgGridReact>
        <button className="btn" onClick={getRowData}>
          store details
        </button>
      </div>
    </div>
  );
};

export default FacultySubjectTable;
