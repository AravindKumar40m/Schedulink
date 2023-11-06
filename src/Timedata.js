import React, { useState } from "react";

const Timedata = (props) => {
  const { filtersubfac, setFiltersubfac, subfac } = props;
  // console.log(subfac)

  // let facname = "";
  const [val, setVal] = useState("");
  const [isSelectOptionOpen, setIsSelectOptionOpen] = useState(true);

  const handleFit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setVal(selectedValue);
    // console.log(val)

    const updatedOptions = filtersubfac.map((option) => {
      if (option.sub_title === selectedValue) {
        console.log(selectedValue);
        const newCount = option.tcp - 1;
        return { ...option, tcp: newCount, disabled: newCount === 0 };
      }
      return option;
    });
    console.log(updatedOptions);

    setIsSelectOptionOpen(false);
    console.log(isSelectOptionOpen);
    console.log(val);

    setFiltersubfac(updatedOptions);

    // const fac = subfac.filter((d) => d.sub_title === selectedValue);

    // fac.map((d) => (facname = d.fac_name));

    // console.log(facname);
  };

  const handleRetrieve = () => {
    setIsSelectOptionOpen(!isSelectOptionOpen);
  };

  return (
    <div>
      <>
        {isSelectOptionOpen && val === "" && (
          <select
            name="overall"
            style={{ width: "150px", position: "relative", top: "10px" }}
            onChange={handleFit}
          >
            <option value="default">subject</option>
            {filtersubfac &&
              filtersubfac.map((d) => (
                //   <option key={d.s_no} disabled={d.disabled}>{d.sub_title}</option>
                <option key={d.s_no} disabled={d.disabled}>
                  {d.sub_title}
                </option>
              ))}
          </select>
        )}
        {isSelectOptionOpen && val !== "" && (
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
    </div>
  );
};

export default Timedata;
