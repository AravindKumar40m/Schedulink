import React from "react";

const SemesterOption = ({ handlesemester }) => {
  return (
    <div>
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
    </div>
  );
};

export default SemesterOption;
