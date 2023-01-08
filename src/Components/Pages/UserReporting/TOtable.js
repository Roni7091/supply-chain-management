import React from "react";
import TOT from "./TOtable.module.css";

export const TOtable = () => {
  return (
    <>
      <div className={TOT.TOBody} style={{ width: "100%" }}>
        <form>
          <table className={TOT.tblcontent}>
            <thead>
              <tr>
                <th>List No</th>
                <th className={TOT.head2}>Sales Order Number</th>
                <th className={TOT.head2}>HU Number</th>
                <th className={TOT.head4}>Pick Order</th>
                <th className={TOT.head2}>Transform Order Number</th>
                <th className={TOT.head3}>Work Order Count</th>
                <th className={TOT.head3}>Transform Order Status</th>
                <th className={TOT.head2}>Created Date</th>
                <th className={TOT.head2}>
                  Transformation Start Date And Time
                </th>
                <th className={TOT.head2}>Transformation End Date And Time</th>
                <th className={TOT.head2}>Total Transformation Time</th>
                <th className={TOT.head2}>Ship to Country</th>
                <th className={TOT.head3}>Work Station</th>
                <th className={TOT.head3}>Label Printer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dynamic Label</td>
                <td>HD19122022</td>
                <td>A</td>
                <td>Dropdown</td>
                <td>Created</td>
                <td>rrrr</td>
                <td>2odin</td>
                <td>input</td>
                <td>SelectDr</td>
                <td>C-1008761</td>
                <td>Vish</td>
                <td>Dec19,2022</td>
                <td>demo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>hoihd</td>
                <td>2odin</td>
                <td>1</td>
                <td>2</td>
                <td>rrrr</td>
                <td>2odin</td>
                <td>1</td>
                <td>2</td>
                <td>hoihd</td>
                <td>2odin</td>
                <td>2odin</td>
                <td>2odin</td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className={TOT.btnContainer}>
          <button className=" btn btn1">Prev</button>
          <button className="btn btn2">1</button>
          <button className="btn btn3">2</button>
          <button className="btn btn4">Next</button>
        </div>
      </div>
    </>
  );
};

export default TOtable;

// import React from "react";
// import TOT from "./TOtable.module.css";

// export const TOtable = () => {
//   return (
//     <>
//       <div className={TOT.TOBody} style={{ width: "100%" }}>
//         <form method="POST">
//           <table>
//             <thead className={TOT.urtThead}>
//               <tr>
//                 <th>Sales Order Number</th>
//                 <th scope="col">HU Number</th>
//                 <th scope="col">Pick Order</th>
//                 <th scope="col">Transform Order Number</th>
//                 <th scope="col">Work Order Count</th>
//                 <th scope="col">Transform Order Status</th>
//                 <th scope="col">Created Date</th>
//                 <th scope="col">Transformation Start Date And Time</th>
//                 <th scope="col">Transformation End Date And Time</th>
//                 <th scope="col">Total Transformation Time</th>
//                 <th scope="col">Ship to Country</th>
//                 <th scope="col">Work Station</th>
//                 <th scope="col">Label Printer</th>
//               </tr>
//             </thead>
//             <tbody className={TOT.urtTbody}>
//               <tr>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//               </tr>
//               <tr>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//                 <td>demo</td>
//               </tr>
//             </tbody>
//           </table>
//         </form>
//         <div className={TOT.container}>
//           <button className=" btn btn1">Prev</button>
//           <button className="btn btn2">1</button>
//           <button className="btn btn3">2</button>
//           <button className="btn btn4">Next</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TOtable;
