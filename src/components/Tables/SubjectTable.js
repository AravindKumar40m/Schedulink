import React from "react";
import { AgGridReact } from "ag-grid-react";

const SubjectTable = ({
  sub_Ref,
  columnDefs,
  firstsub,
  defaultColDef,
  handlefaculty,
}) => {
  return (
    <div>
      <h3>Subject-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          ref={sub_Ref}
          columnDefs={columnDefs}
          rowData={firstsub}
          defaultColDef={defaultColDef}
          rowSelection="single"
          // onSelectionChanged={handlefaculty}
          // onGridReady={onGridReady}
        ></AgGridReact>
        <button className="btn" onClick={handlefaculty}>
          select subject
        </button>
      </div>
    </div>
  );
};

export default SubjectTable;
