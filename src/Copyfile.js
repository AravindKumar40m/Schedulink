import React, { useEffect, useState } from "react";
import Axios from "axios";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Degoption from "./components/Degoption";
import RegulationOption from "./components/RegulationOption";
import SemesterOption from "./components/SemesterOption";
import Semnum from "./components/Semnum";
import Tables from "./components/Tables";

const Selectoption = () => {
  const [deg, setDeg] = useState([]);
  const [sem, setSem] = useState([]);
  const [sub, setSub] = useState([]);
  const [fac, setFac] = useState([]);

  const [firstsem, setFirstsem] = useState([]);
  const [secondsem, setSecondsem] = useState([]);
  const [thirdsem, setThirdsem] = useState([]);
  const [firstsub, setFirstsub] = useState([]);

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
    setFirstsem(data);
  };

  const handlereq_year = (e) => {
    const data = firstsem.filter((d) => d.req_year === e);
    setSecondsem(data);
  };

  const handlesemester = (e) => {
    const data = secondsem.filter((d) => d.sem === e);
    setThirdsem(data);
  };

  const handlesubject = (e) => {
    const a = Number(e.slice(3, 4));
    const data = sub.filter((d) => d.sem_id === a);
    setFirstsub(data);
  };

  // Faculty--Timetable

  // const fac_colunDefs = TimetablecolumnDefs;
  // const fac_rowData = TimetablerowData;

  return (
    <div>
      <Degoption handlesubmit={handlesubmit} deg={deg} />

      <RegulationOption handlereq_year={handlereq_year} />

      <SemesterOption handlesemester={handlesemester} />

      <Semnum handlesubject={handlesubject} thirdsem={thirdsem} />

      <Tables fac={fac} firstsub={firstsub} setFirstsub={setFirstsub} />

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
