import React, { useState } from "react";
import { RiH1 } from "react-icons/ri";
import Navbar21 from "../Navbar21";

import CompoA from "./componentasmt.module.css";
import ComponentTable from "./ComponentTable";
import ComponentTable2 from "./ComponentTable2";

const ComponentAsmt = () => {
  const [CaTable, setCaTable] = useState(false);

  const handleCaTable = (e) => {
    e.preventDefault();
    setCaTable(!CaTable);
  };

  return (
    <>
      <div className={CompoA.main}>
        <Navbar21 name="Assignment Master" />
        <div className={CompoA.main2}>
          <div>
            <label>Component Type</label>
            <br />
            <input type="hello" />
          </div>
          <div>
            <label>Component </label>
            <br />
            <input type="hello" />
          </div>
          <div>
            <label>Component </label>
            <br />
            <input style={{ width: "80px" }} type="hello" />
          </div>

          <div>
            {CaTable ? (
              <div className={CompoA.btns}>
                <button onClick={handleCaTable} className={CompoA.btn3}>
                  Assign Pr/Co
                </button>
                <button className={CompoA.btn1}>Country Code</button>
                <button className={CompoA.btn4}>Reset</button>
                <div className={CompoA.btn5}>🔽Master</div>
              </div>
            ) : (
              <div className={CompoA.btns}>
                <button onClick={handleCaTable} className={CompoA.btn1}>
                  Create
                </button>
                <button className={CompoA.btn2}>Change</button>
                <button className={CompoA.btn3}>Display</button>
                <button className={CompoA.btn4}>Reset</button>
              </div>
            )}
          </div>
        </div>
      </div>
      {CaTable ? (
        <div>
          <div className={CompoA.table}>
            <ComponentTable />
            <div>
              <div className={CompoA.empty}>
                <h4>hello</h4>
              </div>
              <ComponentTable2 />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ComponentAsmt;

// <div className={CompoA.table}>
// <ComponentTable />
// <div>
//   <div className={CompoA.empty}>
//     <h4>hello</h4>
//   </div>
//   <ComponentTable2 />
// </div>
// </div>

// <button onClick={handleCaTable} className={CompoA.btn1}>
// Create
// </button>
// <button className={CompoA.btn2}>Change</button>
// <button className={CompoA.btn3}>Display</button>
// <button className={CompoA.btn4}>Reset</button>
