import React, { useEffect, useState } from "react";
import Axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
// import Timedata from './Timedata';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import ApiRequest from './ApiRequest';

const Selectoption = () => {
  const [deg, setDeg] = useState([]);
  const [sem, setSem] = useState([]);
  const [sub, setSub] = useState([]);
  const [fac, setFac] = useState([]);

  const [firstsem, setFirstsem] = useState([]);
  const [secondsem, setSecondsem] = useState([]);
  const [thirdsem, setThirdsem] = useState([]);
  const [firstsub, setFirstsub] = useState([]);
  const [firstfac, setFirstfac] = useState([]);
  const [subfac, setSubfac] = useState([]);

  const API_DEG = "http://localhost:3500/deg_prog";
  // const API_DEG = 'http://localhost:8000/ttgapp/degreeprogram/';
  const API_SEM = "http://localhost:3500/semester";
  const API_SUB = "http://localhost:3500/subject";
  const API_FAC = "http://localhost:3500/faculty";

  useEffect(() => {
    Axios.get(API_DEG).then((res) => setDeg(res.data));

    Axios.get(API_SEM).then((res) => setSem(res.data));

    Axios.get(API_SUB).then((res) => setSub(res.data));

    Axios.get(API_FAC).then((res) => setFac(res.data));
  }, []);

  const handlesubmit = (e) => {
    const data = sem.filter((d) => d.deg_name === e);
    // console.log(data)
    setFirstsem(data);
  };

  const handlereq_year = (e) => {
    const data = firstsem.filter((d) => d.req_year === e);
    // console.log(data)
    setSecondsem(data);
  };

  const handlesemester = (e) => {
    const data = secondsem.filter((d) => d.sem === e);
    // console.log(data)
    setThirdsem(data);
    // console.log(firstsub.length)

    // firstsub.length ? setFirstsub([]) : console.log("yes")
    // firstsub.length ? setFirstfac([]) : console.log("yes")
    // firstsub.length ? setSubfac([]) : console.log("yes")
    // firstfac.length ? setFirstfac([]) : console.log("yes")
  };

  //ag-grid code-subject table

  const columnDefs = [
    { headerName: "sem_Id", field: "sem_id" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "req_year", field: "req_year" },
    { headerName: "TCP", field: "tcp" },
  ];

  // const rowData = [
  //     { sem_Id: 1, sub_code: 101, sub_title: "c", req_year: "2023"},
  //     { sem_Id: 2, sub_code: 102, sub_title: "digital system", req_year: "2023"},
  //     { sem_Id: 3, sub_code: 103, sub_title: "english", req_year: "2023"},
  // ]

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
  };

  // const onGridReady = (params)=>{
  //     console.log("ready");
  //     Axios.get(API_SUB).then(res => {
  //         // console.log(res.data)
  //         params.api.applyTransaction({add:res.data})})
  // }

  const handlesubject = (e) => {
    const a = Number(e.slice(3, 4));
    const data = sub.filter((d) => d.sem_id === a);
    setFirstsub(data);
  };

  //ag-grid --- faculty table

  const facultycolumns = [
    { headerName: "fac_Id", field: "fac_id" },
    { headerName: "fac_name", field: "fac_name" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "Dept_name", field: "dept_name" },
    { headerName: "TCP", field: "tcp" },
  ];

  // const facultyrow = [
  //     { fac_Id: 1, fac_name: 101, sub_code: "c", dept_name: "2023"},
  //     { fac_Id: 2, fac_name: 102, sub_code: "digital system", dept_name: "2023"},
  //     { fac_Id: 3, fac_name: 103, sub_code: "english", dept_name: "2023"},
  // ]

  const sub_Ref = useRef();
  let code = "";

  const handlefaculty = () => {
    const { api } = sub_Ref.current;

    // console.log(api.getSelectedRows())
    const d = api.getSelectedRows();
    const s = d.values();
    for (const i of s) {
      code = i.sub_code;
    }

    const data = fac.filter((d) => d.sub_code === code);
    setFirstfac(data);
  };

  // const handlefaculty = (event)=>{
  //     const d =event.api.getSelectedRows()
  //     const s = d.values();
  //     for (const i of s){
  //         code = i.sub_code
  //     }

  //     const data = fac.filter((d)=>(
  //         d.sub_code === code
  //     ))
  //     setFirstfac(data)

  // }

  //ag-grid -- overall table

  const overallcolumns = [
    { headerName: "s_no", field: "s_no" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "fac_name", field: "fac_name" },
    { headerName: "TCP", field: "tcp" },
  ];

  // const overallrow = [
  //     { sub_code: 101, sub_title: "c", fac_name: "c-a"}
  // ]

  const fac_Ref = useRef();
  let sub_code = "";
  let title = "";
  let name = "";
  let ttcp = "";

  const handlesubfac = () => {
    const { api } = fac_Ref.current;
    const d = api.getSelectedRows();
    // console.log(d)
    const s = d.values();
    for (const i of s) {
      name = i.fac_name;
      sub_code = i.sub_code;
      title = i.sub_title;
      ttcp = i.tcp;
    }
    // console.log(name)
    // console.log(title)
    // console.log(sub_code)
    const newobj = {
      s_no: subfac.length + 1,
      sub_code: sub_code,
      sub_title: title,
      fac_name: name,
      tcp: ttcp,
    };
    setSubfac([...subfac, newobj]);
    setFirstfac(null);

    const deletesubject = firstsub.filter((sub) => sub.sub_code !== sub_code);
    // console.log(deletesubject)
    setFirstsub(deletesubject);
  };
  const [filtersubfac, setFiltersubfac] = useState([]);

  const subfac_Ref = useRef();

  // const API_SUBFAC = "http://localhost:3500/subfac";
  // const API_SUBFAC = "http://localhost:8000/ttgapp"

  const getRowData = async () => {
    let rowData = [];
    subfac_Ref.current.api.forEachNode((node) => rowData.push(node.data));
    setFiltersubfac(rowData);
    // console.log(filtersubfac)

    // const postoptions = {
    //     method: 'POST',
    //     headers: {
    //         'Content-type':'application/json'
    //     },
    //     body: JSON.stringify(filtersubfac)
    // }

    // const result = await ApiRequest(API_SUBFAC,postoptions)
    // if(result) console.log(result)

    // Axios.post(API_SUBFAC+'/overall-create/',filtersubfac).then((res) => {
    //     if(res.status === 200){
    //         alert("data sent successfully!");
    //     }
    //     else{
    //         alert("Error sending data");
    //     }
    // })
  };

  const TimetablecolumnDefs = [
    { headerName: "Days", field: "Days", maxWidth: 100, cellRenderer: null },
    { headerName: "period_1", field: "8:30-9:20" },
    { headerName: "period_2", field: "9:30-10-20" },
    { headerName: "period_3", field: "10:30-11:20" },
    { headerName: "period_4", field: "11:30-12:10" },
    { headerName: "period_5", field: "1:10-2:00" },
    { headerName: "period_6", field: "2:00-2:50" },
    { headerName: "period_7", field: "3:00-3:50" },
    { headerName: "period_8", field: "3:50-4:30" },
  ];

  //   const frameworkComponents = {
  //     Timedata: Timedata,
  //   };

  const TimetablerowData = [
    { Days: "Monday" },
    { Days: "Tuesday" },
    { Days: "Wednesday" },
    { Days: "Thursday" },
    { Days: "Friday" },
  ];

  // const TimetablerowData = [
  //   {Days: 'Monday', '8:30-9:20': 'SE', '9:30-10-20': "SE",'10:30-11:20':"SELAB",'11:30-12:10':"SELAB",'1:10-2:00':"DWM",'2:00-2:50':"OSS",'3:00-3:50':"NILL",'3:50-4:30':"NILL"},
  //   {Days: 'Tuesday', '8:30-9:20': 'DWMLAB', '9:30-10-20': "DWMLAB",'10:30-11:20':"SELAB",'11:30-12:10':"SELAB",'1:10-2:00':"DAA",'2:00-2:50':"DAA",'3:00-3:50':"SPM",'3:50-4:30':"NILL"},
  //   {Days: 'Wednesday', '8:30-9:20': 'NILL', '9:30-10-20': "NILL",'10:30-11:20':"DWM",'11:30-12:10':"DWM",'1:10-2:00':"ADBMS",'2:00-2:50':"ADBMS",'3:00-3:50':"NILL",'3:50-4:30':"NILL"},
  //   {Days: 'Thursday', '8:30-9:20': 'NILL', '9:30-10-20': "SPM",'10:30-11:20':"ADBMS",'11:30-12:10':"ADBMS",'1:10-2:00':"OSS",'2:00-2:50':"SPM",'3:00-3:50':"SPM",'3:50-4:30':"NILL"},
  //   {Days: 'Friday', '8:30-9:20': 'NILL', '9:30-10-20': "SE",'10:30-11:20':"DAA",'11:30-12:10':"DAA",'1:10-2:00':"OSS",'2:00-2:50':"NILL",'3:00-3:50':"NILL",'3:50-4:30':"NILL"}
  // ];

  const TimetabledefaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    cellRenderer: Timedata,
    // cellRendererParams:{ filtersubfac , setFiltersubfac ,subfac}
  };

  let Row_Index = 0;
  let Column_Name = "";
  let Row_Name = "";

  const onCellClicked = (params) => {
    Row_Index = params.node.rowIndex;
    Column_Name = params.colDef.headerName;

    Row_Name = params.data;

    // console.log('Clicked on cell:', params);
    // // Access cell position details from the 'params' object
    // console.log('Row Index:', params.node.rowIndex);
    // console.log('Column Name:', params.colDef.headerName);
    // console.log('Value:', params.value);
  };

  function Timedata(props) {
    const [isSelectOptionOpen, setIsSelectOptionOpen] = useState(true);
    const [val, setVal] = useState("");

    let fac_name = "";

    const handleFit = (e) => {
      e.preventDefault();
      const selectedValue = e.target.value;
      setVal(selectedValue);

      //   const updatedOptions = filtersubfac.map((option) => {
      //     if (option.sub_title === selectedValue) {
      //       console.log(selectedValue)
      //       const newCount = option.tcp - 1;
      //       return { ...option, tcp: newCount, disabled: newCount === 0 };
      //     }
      //     return option;
      //   });
      //   console.log(updatedOptions)

      setIsSelectOptionOpen(false);
      console.log(isSelectOptionOpen);

      //   setFiltersubfac(updatedOptions);

      const fac = subfac.filter((d) => d.sub_title === selectedValue);

      fac.map((d) => (fac_name = d.fac_name));

      const faculty = {
        id: facname.length + 1,
        name: fac_name,
      };

      console.log(faculty);

      setFacname((facname) => [...facname, faculty]);

      console.log(facname);

      const data = {
        row: Row_Index,
        col_name: Column_Name,
        row_name: Row_Name,
        value: selectedValue,
      };

      // console.log(data)
    };

    const handleRetrieve = () => {
      setIsSelectOptionOpen(!isSelectOptionOpen);
    };

    return (
      <>
        {isSelectOptionOpen && (
          <select
            name="overall"
            style={{ width: "150px", position: "relative", top: "10px" }}
            onChange={handleFit}
          >
            <option value="default">subject</option>
            {filtersubfac.map((d) => (
              <option key={d.s_no} disabled={d.disabled}>
                {d.sub_title}
              </option>
            ))}
          </select>
        )}
        {!isSelectOptionOpen && (
          <div>
            <p style={{ position: "relative", top: "20px", left: "30px" }}>
              {val}
            </p>
            <button
              style={{ position: "relative", left: "40px" }}
              onClick={handleRetrieve}
            >
              edit
            </button>
          </div>
        )}
      </>
    );
  }

  // Faculty--Timetable

  const fac_colunDefs = TimetablecolumnDefs;
  const fac_rowData = TimetablerowData;

  const [facname, setFacname] = useState([]);

  return (
    <div>
      {/* {console.log(filtersubfac)} */}
      <select name="deg" onChange={(e) => handlesubmit(e.target.value)}>
        <option value="default">degree programme</option>
        {deg.map((d) => (
          <option key={d.id}>{d.deg_name}</option>
        ))}
      </select>

      <label>
        Pick a regulation:
        <select
          name="requlation"
          onChange={(e) => handlereq_year(e.target.value)}
        >
          <option value="default">choose 2019 or 2023</option>
          <option value="2019">2019</option>
          <option value="2023">2023</option>
        </select>
      </label>

      <label>
        Pick a semester:
        <select
          name="semester"
          onChange={(e) => handlesemester(e.target.value)}
        >
          <option value="default">choose odd or even</option>
          <option value="odd">odd</option>
          <option value="even">even</option>
        </select>
      </label>

      <select name="semnum" onChange={(e) => handlesubject(e.target.value)}>
        <option value="default">semester</option>
        {thirdsem.map((d) => (
          <option key={d.sem_id}>
            id:{d.sem_id} sem:{d.sem_num}
          </option>
        ))}
      </select>
      <br />
      <br />
      {/* subject-table */}
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

      {/* faculty-table */}
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

      {/* overall-table */}
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

      <h3>Timetable</h3>
      <div className="ag-theme-alpine" style={{ height: "500px" }}>
        <AgGridReact
          // ref={subfac_Ref}
          columnDefs={TimetablecolumnDefs}
          rowData={TimetablerowData}
          defaultColDef={TimetabledefaultColDef}
          // frameworkComponents={frameworkComponents}
          // rowSelection='single'
          // enableFillHandle={enableFillHandle}
          rowHeight="150"
          onCellClicked={onCellClicked}
          // onGridReady={onGridReady}
        ></AgGridReact>
        {/* <button className='btn' onClick={getRowData}>store details</button> */}
      </div>

      {/* {
          console.log(facname.name)
        } */}

      {/* {facname && 
          <>
              <h3>{facname} Timetable</h3>
              <div className="ag-theme-alpine" style={{height: '500px'}} >
                <AgGridReact
                    // ref={subfac_Ref}
                    columnDefs={fac_colunDefs}
                    rowData={fac_rowData}
                    defaultColDef={defaultColDef}
                    
                    // frameworkComponents={frameworkComponents}
                    // rowSelection='single'
                    // enableFillHandle={enableFillHandle}
                    rowHeight = '150'
                    // onCellClicked={onCellClicked}
                    // onGridReady={onGridReady}
                >
    
                </AgGridReact>
  
            </div>
          </>
          
        } */}
    </div>
  );
};

export default Selectoption;
