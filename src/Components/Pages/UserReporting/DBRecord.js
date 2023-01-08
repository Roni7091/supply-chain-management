import React from "react";
import DBR from "./WOReports.module.css";
import { useState } from "react";
import DBRecordTable from "./DBRecordTable";

const DBRecord = () => {
  const [toggleT3, setToggleT3] = useState(false);
  const toggleHandler3 = () => {
    setToggleT3(!toggleT3);
  };

  return (
    <>
      <div className={DBR.TObody} style={{ display: "inline-flex" }}>
        <form method="GET" className={DBR.woForm}>
          <div className={DBR.worFormBody}>
            <div className={DBR.worFormRow1}>
              <div className={DBR.fr}>
                {" "}
                <label htmlFor="" style={{ paddingLeft: "4px" }}>
                  Work Order Number
                </label>
              </div>
            </div>
            <div className={DBR.worFormRow1}>
              <div className={DBR.fr}>
                <input type="text" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "block",
          justifyContent: "space-between",
        }}
      >
        <button className={DBR.searchbtn} onClick={toggleHandler3}>
          EXECUTE
        </button>
        <button className={DBR.clearbtn}>CLEAR</button>
      </div>
      <div
        style={{ width: "100%", display: "block", justifyContent: "center" }}
      >
        {toggleT3 ? <DBRecordTable /> : null}
      </div>
    </>
  );
};

export default DBRecord;

// import React from "react";
// import DBR from "./WOReports.module.css";
// import { useState } from "react";
// import DBRecordTable from "./DBRecordTable";

// const DBRecord = () => {
//   const [toggleT3, setToggleT3] = useState(false);
//   const toggleHandler3 = () => {
//     setToggleT3(!toggleT3);
//   };

//   return (
//     <>
//       <div className={DBR.TObody} style={{ display: "inline-flex" }}>
//         <form method="GET">
//           <tr>
//             <th>Work Order Number</th>
//           </tr>

//           <tr>
//             <td>
//               <input type="text" />
//             </td>
//           </tr>
//         </form>
//       </div>
//       <div
//         style={{
//           marginTop: "20px",
//           display: "block",
//           justifyContent: "space-between",
//         }}
//       >
//         <button className={DBR.searchbtn} onClick={toggleHandler3}>
//           EXECUTE
//         </button>
//         <button className={DBR.clearbtn}>CLEAR</button>
//       </div>
//       <div
//         style={{ width: "100%", display: "block", justifyContent: "center" }}
//       >
//         {toggleT3 ? <DBRecordTable /> : null}
//       </div>
//     </>
//   );
// };

// export default DBRecord;
