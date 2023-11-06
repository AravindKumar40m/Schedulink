import React from "react";

const RegulationOption = ({ handlereq_year }) => {
  return (
    <div>
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
    </div>
  );
};

export default RegulationOption;
