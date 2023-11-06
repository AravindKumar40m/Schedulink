import React from "react";

const Semnum = ({ handlesubject, thirdsem }) => {
  return (
    <div>
      <select name="semnum" onChange={(e) => handlesubject(e.target.value)}>
        <option value="default">semester</option>
        {thirdsem.map((d) => (
          <option key={d.sem_id}>
            id:{d.sem_id} sem:{d.sem_num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Semnum;
