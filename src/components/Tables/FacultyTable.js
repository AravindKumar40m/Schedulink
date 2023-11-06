import React from "react";
import { AgGridReact } from "ag-grid-react";

const FacultyTable = ({
  fac_Ref,
  facultycolumns,
  firstfac,
  defaultColDef,
  handlesubfac,
}) => {
  return (
    <div>
      <h3>Faculty-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          ref={fac_Ref}
          columnDefs={facultycolumns}
          rowData={firstfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
          // onSelectionChanged={handlesubfac}
          // onGridReady={onGridReady}
        ></AgGridReact>
        <button className="btn" onClick={handlesubfac}>
          select subject
        </button>
      </div>
    </div>
  );
};

export default FacultyTable;
