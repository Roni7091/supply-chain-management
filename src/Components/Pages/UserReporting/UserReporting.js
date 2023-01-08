import React from "react";
import UR from "./UserReporting.module.css";
import { MdOutlineNoteAlt } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { useState } from "react";
import TOReports from "./TOReports";
import DBRecord from "./DBRecord";
import WorkOrderReports from "./WorkOrderReports";
import Navbar21 from "../Navbar21";

const UserReporting = () => {
  //Transform-Order-Reports
  const [toggleK1, setToggleK1] = useState(false);
  const toggleHandlerK1 = (e) => {
    e.preventDefault();
    setToggleK1(!toggleK1);
  };

  //Work-Order-Reports
  const [toggleK2, setToggleK2] = useState(false);
  const toggleHandlerK2 = (e) => {
    e.preventDefault();
    setToggleK2(!toggleK2);
  };

  //DB-Reports
  const [toggleK3, setToggleK3] = useState(false);
  const toggleHandlerK3 = (e) => {
    e.preventDefault();
    setToggleK3(!toggleK3);
  };

  return (
    <section className={UR.userReports}>
      <Navbar21 name="User Reporting" />

      <div className={UR.reports}>
        <div className={UR.report1}>
          <div
            className={UR.toReports}
            onClick={toggleHandlerK1}
            style={{
              height: "60px",
              width: "60px",
              border: "2px solid rgba(247, 63, 8, 0.712)",
              borderRadius: "30px",
              marginLeft: "80px",
            }}
          >
            <MdOutlineNoteAlt size={40} style={{ marginTop: "10px" }} />
          </div>{" "}
          <br />
          <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
            Transform Order Reports
          </p>
        </div>

        <div className={UR.report2}>
          {/* <a style={{textDecoration:"none",color:"white"}} href="/WorkOrderReports"> */}
          <div
            className={UR.woReports}
            onClick={toggleHandlerK2}
            style={{
              height: "60px",
              width: "60px",
              border: "2px solid rgba(247, 63, 8, 0.712)",
              borderRadius: "30px",
              marginLeft: "80px",
            }}
          >
            <GiNotebook
              size={36}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            />
          </div>
          <br />
          <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
            Work Order Reports
          </p>
          {/* </a> */}
        </div>

        <div className={UR.report3}>
          {/* <a style={{textDecoration:"none",color:"white"}} href="/DBRecord"> */}
          <div
            className={UR.dbRecord}
            onClick={toggleHandlerK3}
            style={{
              height: "60px",
              width: "60px",
              border: "2px solid rgba(247, 63, 8, 0.712)",
              borderRadius: "30px",
              marginLeft: "80px",
            }}
          >
            <SlNotebook size={34} style={{ marginTop: "10px" }} />
          </div>
          <br />
          <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
            Digital Batch Record
          </p>
          {/* </a> */}
        </div>
      </div>

      <div style={{ width: "100%", justifyContent: "center" }}>
        {toggleK1 ? (
          <TOReports />
        ) : toggleK2 ? (
          <WorkOrderReports />
        ) : toggleK3 ? (
          <DBRecord />
        ) : null}
      </div>
    </section>
  );
};

export default UserReporting;

// import React from "react";
// import UR from "./UserReporting.module.css";
// import { MdOutlineNoteAlt } from "react-icons/md";
// import { GiNotebook } from "react-icons/gi";
// import { SlNotebook } from "react-icons/sl";
// import { useState } from "react";
// import TOReports from "./TOReports";
// import DBRecord from "./DBRecord";
// import WorkOrderReports from "./WorkOrderReports";

// const UserReporting = () => {
//   //Transform-Order-Reports
//   const [toggleK1, setToggleK1] = useState(false);
//   const toggleHandlerK1 = (e) => {
//     e.preventDefault();
//     setToggleK1(!toggleK1);
//   };

//   //Work-Order-Reports
//   const [toggleK2, setToggleK2] = useState(false);
//   const toggleHandlerK2 = (e) => {
//     e.preventDefault();
//     setToggleK2(!toggleK2);
//   };

//   //DB-Reports
//   const [toggleK3, setToggleK3] = useState(false);
//   const toggleHandlerK3 = (e) => {
//     e.preventDefault();
//     setToggleK3(!toggleK3);
//   };

//   return (
//     <section className={UR.userReports}>
//       <div className={UR.URtitle}>
//         <a href="https://usecheck.com/" className={UR.btnshine} target="_blank">
//           User Reporting
//         </a>
//       </div>

//       <div className={UR.reports}>
//         <div className={UR.report1}>
//           {/* <a style={{textDecoration:"none",color:"white"}} href="/UserReporting"> */}
//           <div
//             className={UR.toReports}
//             onClick={toggleHandlerK1}
//             style={{
//               height: "60px",
//               width: "60px",
//               border: "2px solid rgba(247, 63, 8, 0.712)",
//               borderRadius: "30px",
//               marginLeft: "80px",
//             }}
//           >
//             <MdOutlineNoteAlt
//               size={40}
//               style={{ marginTop: "10px", marginLeft: "7px" }}
//             />
//           </div>{" "}
//           <br />
//           <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
//             Transform Order Reports
//           </p>
//           {/* </a> */}
//         </div>

//         <div className={UR.report2}>
//           {/* <a style={{textDecoration:"none",color:"white"}} href="/WorkOrderReports"> */}
//           <div
//             className={UR.woReports}
//             onClick={toggleHandlerK2}
//             style={{
//               height: "60px",
//               width: "60px",
//               border: "2px solid rgba(247, 63, 8, 0.712)",
//               borderRadius: "30px",
//               marginLeft: "80px",
//             }}
//           >
//             <GiNotebook
//               size={36}
//               style={{ marginTop: "10px", marginLeft: "9px" }}
//             />
//           </div>{" "}
//           <br />{" "}
//           <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
//             Work Order Reports
//           </p>
//           {/* </a> */}
//         </div>

//         <div className={UR.report3}>
//           {/* <a style={{textDecoration:"none",color:"white"}} href="/DBRecord"> */}
//           <div
//             className={UR.dbRecord}
//             onClick={toggleHandlerK3}
//             style={{
//               height: "60px",
//               width: "60px",
//               border: "2px solid rgba(247, 63, 8, 0.712)",
//               borderRadius: "30px",
//               marginLeft: "80px",
//             }}
//           >
//             <SlNotebook
//               size={34}
//               style={{ marginTop: "10px", marginLeft: "9px" }}
//             />
//           </div>{" "}
//           <br />
//           <p style={{ paddingLeft: "50px", fontWeight: "600", color: "white" }}>
//             Digital Batch Record
//           </p>
//           {/* </a> */}
//         </div>
//       </div>

//       <div style={{ width: "100%", justifyContent: "center" }}>
//         {toggleK1 ? (
//           <TOReports />
//         ) : toggleK2 ? (
//           <WorkOrderReports />
//         ) : toggleK3 ? (
//           <DBRecord />
//         ) : null}
//       </div>
//     </section>
//   );
// };

// export default UserReporting;
