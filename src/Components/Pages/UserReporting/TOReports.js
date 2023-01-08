import React from "react";
import TOR from "./TOReports.module.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import TOtable from "./TOtable";

const TOReports = () => {
  const [toggleT1, setToggleT1] = useState(false);
  const toggleHandlerT1 = () => {
    setToggleT1(!toggleT1);
  };

  return (
    <>
      <div className={TOR.torContainer}>
        <form method="GET" className={TOR.torForm}>
          <div className={TOR.torFormBody}>
            <div className={TOR.torFormRow1}>
              <div className={TOR.fr}>
                <label htmlFor="">Transform Order Number</label>
              </div>
              <div className={TOR.fr}>
                <label htmlFor="">Sales Order Number</label>
              </div>
              <div className={TOR.fr}>
                <label htmlFor="">Work Station</label>
              </div>
              <div className={TOR.fr}>
                <label htmlFor="">Transformation Site</label>
              </div>
              <div className={TOR.fr}>
                <label htmlFor="">Transform Order Status</label>
              </div>

              <div className={TOR.fr}>
                <label htmlFor="">Date Created Range</label>
              </div>
            </div>

            <div className={TOR.torFormRow2}>
              <div className={TOR.fr}>
                <input type="text" className={TOR.torInp} />
              </div>
              <div className={TOR.fr}>
                <input type="text" className={TOR.torInp} />
              </div>
              <div className={TOR.fr}>
                <input type="text" className={TOR.torInp} />
              </div>
              <div className={TOR.fr}>
                <select id="sites" name="sites" className={TOR.torSel}>
                  <option value="111">Courcelles,Belgium</option>
                  <option value="222">Saab</option>
                  <option value="333">Fiat</option>
                  <option value="444">Audi</option>
                </select>
              </div>
              <div className={TOR.fr}>
                <select id="status" name="status" className={TOR.torSel}>
                  <option value="111">
                    <input type="checkbox" /> CANCEL
                  </option>
                  <option value="222">
                    <input type="checkbox" />
                    COMPLETED
                  </option>
                  <option value="333">
                    <input type="checkbox" />
                    CREATED
                  </option>
                  <option value="444">
                    <input type="checkbox" />
                    IN-PROCESS
                  </option>
                  <option value="444">
                    <input type="checkbox" />
                    ON-HOLD
                  </option>
                </select>
              </div>

              <div className={TOR.fr}>
                <input
                  type="date"
                  onFocus="(this.type='date')"
                  className={TOR.torInp}
                />
              </div>
            </div>
          </div>
        </form>
        <div
          style={{
            marginTop: "20px",
            display: "block",
            justifyContent: "space-between",
          }}
        >
          <button className={TOR.searchbtn} onClick={toggleHandlerT1}>
            <IoMdSearch style={{ marginBottom: "3px" }} />
            SEARCH
          </button>
          <button className={TOR.clearbtn}>CLEAR</button>
        </div>
        <div
          style={{
            display: "block",
            justifyContent: "center",
            paddingBottom: "20px",
            padding: "6px",
          }}
        >
          {toggleT1 ? <TOtable /> : null}
        </div>
      </div>
    </>
  );
};

export default TOReports;

// <div className={TOR.torFormRow2}>
// <div className={TOR.fr}>
//   <input type="text" />
// </div>
// <div className={TOR.fr}>
//   <input type="text" />
// </div>
// <div className={TOR.fr}>
//   <input type="text" />
// </div>
// <div className={TOR.fr}>
//   <select className={TOR.slct} id="sites" name="sites">
//     <option value="111">Courcelles,Belgium</option>
//     <option value="222">Saab</option>
//     <option value="333">Fiat</option>
//     <option value="444">Audi</option>
//   </select>
// </div>
// <div className={TOR.fr}>
//   <select className={TOR.slct} id="status" name="status">
//     <option value="111">
//       {" "}
//       <input type="checkbox" /> CANCEL
//     </option>
//     <option value="222">
//       <input type="checkbox" />
//       COMPLETED
//     </option>
//     <option value="333">
//       <input type="checkbox" />
//       CREATED
//     </option>
//     <option value="444">
//       <input type="checkbox" />
//       IN-PROCESS
//     </option>
//     <option value="444">
//       <input type="checkbox" />
//       ON-HOLD
//     </option>
//   </select>
// </div>
// <div className={TOR.fr}>
//   <input type="text" />
// </div>
// <div className={TOR.fr}>
//   <input type="text" />
// </div>
// <div className={TOR.fr}>
//   <input type="date" onFocus="(this.type='date')" />
// </div>
// </div>

// import React from "react";
// import TOR from "./TOReports.module.css";
// import { IoMdSearch } from "react-icons/io";
// import { useState } from "react";
// import TOtable from "./TOtable";

// const TOReports = () => {
//   const [toggleT1, setToggleT1] = useState(false);
//   const toggleHandlerT1 = () => {
//     setToggleT1(!toggleT1);
//   };

//   return (
//     <>
//       <div className={TOR.torContainer}>
//         <form method="GET" className={TOR.torForm}>
//           <tr>
//             <th>Transform Order Number</th>
//             <th>Sales Order Number</th>
//             <th>Work Station</th>
//             <th>Transformation Site</th>
//             <th>Transform Order Status</th>
//             <th>Ship to Country</th>
//             <th>Transformation Request</th>
//             <th>Data Created Range</th>
//           </tr>

//           <tr>
//             <td>
//               <input type="text" />
//             </td>
//             <td>
//               <input type="text" />
//             </td>
//             <td>
//               <input type="text" />
//             </td>
//             <td>
//               <select id="sites" name="sites">
//                 <option value="111">Courcelles,Belgium</option>
//                 <option value="222">Saab</option>
//                 <option value="333">Fiat</option>
//                 <option value="444">Audi</option>
//               </select>
//             </td>
//             <td>
//               <select id="status" name="status">
//                 <option value="111">
//                   {" "}
//                   <input type="checkbox" /> CANCEL
//                 </option>
//                 <option value="222">
//                   <input type="checkbox" />
//                   COMPLETED
//                 </option>
//                 <option value="333">
//                   <input type="checkbox" />
//                   CREATED
//                 </option>
//                 <option value="444">
//                   <input type="checkbox" />
//                   IN-PROCESS
//                 </option>
//                 <option value="444">
//                   <input type="checkbox" />
//                   ON-HOLD
//                 </option>
//               </select>
//             </td>
//             <td>
//               <input type="text" />
//             </td>
//             <td>
//               <input type="text" />
//             </td>
//             <td>
//               <input type="date" onFocus="(this.type='date')" />
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
//         <button className={TOR.searchbtn} onClick={toggleHandlerT1}>
//           <IoMdSearch style={{ marginBottom: "3px" }} />
//           SEARCH
//         </button>
//         <button className={TOR.clearbtn}>CLEAR</button>
//       </div>
//       <div
//         style={{
//           display: "block",
//           justifyContent: "center",
//           paddingBottom: "20px",
//           padding: "6px",
//         }}
//       >
//         {toggleT1 ? <TOtable /> : null}
//       </div>
//     </>
//   );
// };

// export default TOReports;
