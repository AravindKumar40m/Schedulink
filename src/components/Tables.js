import React, { useState } from "react";
import SubjectTable from "./Tables/SubjectTable";
import { useRef } from "react";
import FacultyTable from "./Tables/FacultyTable";
import FacultySubjectTable from "./Tables/FacultySubjectTable";
import Timetable from "./Tables/Timetable";
import Timedata from "./../Timedata";
// import ApiRequest from './ApiRequest';

const Tables = ({ fac, firstsub, setFirstsub }) => {
  const [firstfac, setFirstfac] = useState([]);
  const [subfac, setSubfac] = useState([]);
  const [filtersubfac, setFiltersubfac] = useState([]);
  // const [facname, setFacname] = useState([]);

  const sub_Ref = useRef();
  const fac_Ref = useRef();
  const subfac_Ref = useRef();

  //Timetable Data

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

  // const handleSetFilter = (options) => {
  //   setFiltersubfac(options);
  // };

  const TimetabledefaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    // textAlign: "center",
    cellRenderer: Timedata,
    cellRendererParams: { filtersubfac, setFiltersubfac, subfac },
  };

  // const API_SUBFAC = "http://localhost:3500/subfac";
  // const API_SUBFAC = "http://localhost:8000/ttgapp"

  const frameworkComponents = {
    Timedata: Timedata,
  };

  // let Row_Index = 0;
  // let Column_Name = "";
  // let Row_Name = "";

  // const onCellClicked = (params) => {
  //   Row_Index = params.node.rowIndex;
  //   Column_Name = params.colDef.headerName;

  //   Row_Name = params.data;
  // };

  // function Timedata(props) {
  //   let fac_name = "";
  //   const [isSelectOptionOpen, setIsSelectOptionOpen] = useState(true);
  //   const [val, setVal] = useState("");
  //   const [subjects, setSubjects] = useState([]);
  //   const [newCount, setNewCount] = useState(0);

  //   useEffect(() => {
  //     setSubjects(filtersubfac);
  //   }, []);

  //   const handleFit = (e) => {
  //     e.preventDefault();
  //     const selectedValue = e.target.value;
  //     setVal(selectedValue);

  //     const updatedOptions = subjects.map((option) => {
  //       if (option.sub_title === selectedValue) {
  //         console.log(selectedValue);

  //         setNewCount(option.tcp - 1);
  //         return { ...option, tcp: newCount, disabled: newCount === 0 };
  //       }
  //       return option;
  //     });

  //     setSubjects(updatedOptions);
  //     setIsSelectOptionOpen(false);
  //     console.log(isSelectOptionOpen);
  //     console.log(updatedOptions);

  //     // const fac = subfac.filter((d) => d.sub_title === selectedValue);

  //     // fac.map((d) => (fac_name = d.fac_name));

  //     // const faculty = {
  //     //   id: facname.length + 1,
  //     //   name: fac_name,
  //     // };

  //     // console.log(faculty);

  //     // setFacname((facname) => [...facname, faculty]);

  //     // console.log(facname);

  //     // const data = {
  //     //   row: Row_Index,
  //     //   col_name: Column_Name,
  //     //   row_name: Row_Name,
  //     //   value: selectedValue,
  //     // };

  //     // console.log(data);
  //   };

  //   const handleRetrieve = () => {
  //     setIsSelectOptionOpen(!isSelectOptionOpen);
  //   };

  //   return (
  //     <>
  //       {isSelectOptionOpen && (
  //         <select
  //           name="overall"
  //           style={{ width: "150px", position: "relative", top: "10px" }}
  //           onChange={handleFit}
  //         >
  //           <option value="default">subject</option>
  //           {subjects.map((d) => (
  //             <option key={d.s_no} disabled={d.disabled}>
  //               {d.sub_title}
  //             </option>
  //           ))}
  //         </select>
  //       )}
  //       {!isSelectOptionOpen && (
  //         <div>
  //           <p style={{ position: "relative", top: "20px", left: "30px" }}>
  //             {val}
  //           </p>
  //           <button
  //             style={{ position: "relative", left: "40px" }}
  //             onClick={handleRetrieve}
  //           >
  //             edit
  //           </button>
  //         </div>
  //       )}
  //     </>
  //   );
  // }

  //Faculty-Subject-Table Data

  const overallcolumns = [
    { headerName: "s_no", field: "s_no" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "fac_name", field: "fac_name" },
    { headerName: "TCP", field: "tcp" },
  ];

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

  //Faculty-Table Data

  const facultycolumns = [
    { headerName: "fac_Id", field: "fac_id" },
    { headerName: "fac_name", field: "fac_name" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "Dept_name", field: "dept_name" },
    { headerName: "TCP", field: "tcp" },
  ];

  let sub_code = "";
  let title = "";
  let name = "";
  let ttcp = "";

  const handlesubfac = () => {
    const { api } = fac_Ref.current;
    const d = api.getSelectedRows();
    const s = d.values();
    for (const i of s) {
      name = i.fac_name;
      sub_code = i.sub_code;
      title = i.sub_title;
      ttcp = i.tcp;
    }

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
    setFirstsub(deletesubject);
  };

  //Subject-Table Data

  const columnDefs = [
    { headerName: "sem_Id", field: "sem_id" },
    { headerName: "sub_code", field: "sub_code" },
    { headerName: "sub_title", field: "sub_title" },
    { headerName: "req_year", field: "req_year" },
    { headerName: "TCP", field: "tcp" },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
  };

  let code = "";

  const Handlefaculty = () => {
    const { api } = sub_Ref.current;
    const d = api.getSelectedRows();
    const s = d.values();
    for (const i of s) {
      code = i.sub_code;
    }

    const data = fac.filter((d) => d.sub_code === code);
    setFirstfac(data);
  };
  return (
    <div>
      <SubjectTable
        sub_Ref={sub_Ref}
        firstsub={firstsub}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        handlefaculty={Handlefaculty}
      />
      <FacultyTable
        fac_Ref={fac_Ref}
        firstfac={firstfac}
        facultycolumns={facultycolumns}
        handlesubfac={handlesubfac}
        defaultColDef={defaultColDef}
      />
      <FacultySubjectTable
        subfac_Ref={subfac_Ref}
        overallcolumns={overallcolumns}
        subfac={subfac}
        defaultColDef={defaultColDef}
        getRowData={getRowData}
      />
      <Timetable
        TimetablecolumnDefs={TimetablecolumnDefs}
        TimetablerowData={TimetablerowData}
        TimetabledefaultColDef={TimetabledefaultColDef}
        // onCellClicked={onCellClicked}
        frameworkComponents={frameworkComponents}
      />
    </div>
  );
};

export default Tables;
