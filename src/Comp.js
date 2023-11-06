import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

class MyGridComponent extends Component {
  // Set your column definitions and data here
  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Value', field: 'value' },
  ];

  rowData = [
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    // Add more rows as needed
  ];

  // Reference to the ag-Grid component
  agGrid = null;

  render() {
    return (
      <div>
        <div style={{ height: '300px', width: '600px' }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.columnDefs}
            rowData={this.rowData}
            onGridReady={(params) => (this.agGrid = params.api)}
            rowSelection='single'
          />
        </div>
        <button onClick={this.handleSelectButtonClick}>Select Row</button>
      </div>
    );
  }

  handleSelectButtonClick = () => {
    // Implement your logic to select a row here
    if (this.agGrid) {
      const selectedRows = this.agGrid.getSelectedRows();
      if (selectedRows.length > 0) {
        // Access the selected row data here
        const selectedRow = selectedRows[0];
        alert(`Selected Row ID: ${selectedRow.id}, Name: ${selectedRow.name}`);
      } else {
        alert('Please select a row before clicking the button.');
      }
    }
  };
}

export default MyGridComponent;
