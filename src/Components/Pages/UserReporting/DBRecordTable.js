import React from "react";
//import {FcFilledFilter} from "react-icons/fc";
import DBRT from "./DBRecordTable.module.css";

export const DBRecordTable = () => {
  return (
    <>
      <div className={DBRT.tab2Body}>
        <div className={DBRT.URtitile}>
          <h2 style={{ color: "black", fontFamily: "serif" }}>
            DIGITAL BATCH RECORD
          </h2>
          <br />
          <h6 style={{ textAlign: "left", color: "black", marginTop: "10px" }}>
            PART 1 : PRODUCT TRANSFORMATION - TRANSFORMATION OPERATOR
          </h6>
        </div>

        <div className={DBRT.tableDataContainer}>
          <form method="POST">
            <table className={DBRT.tblcontent}>
              <thead>
                <tr>
                  <th className={DBRT.head2}>Work Order Number</th>
                  <th className={DBRT.head2}>Work Order Status</th>
                  <th className={DBRT.head2}>Transform Order Number</th>
                  <th className={DBRT.head3}>Ship to Country</th>
                  <th className={DBRT.head3}>Transformation Request</th>
                  <th className={DBRT.head2}>GTIN</th>
                  <th className={DBRT.head2}>Product Number</th>
                  <th className={DBRT.head4}>Variety/Mode Code</th>
                  <th className={DBRT.head2}>Product Description</th>
                  <th className={DBRT.head2}>Batch Number</th>
                  <th className={DBRT.head3}>Serial No</th>
                  <th className={DBRT.head2}>Quantity</th>
                  <th className={DBRT.head2}>Unit of Measurement</th>
                  <th className={DBRT.head2}>Comment</th>
                  <th className={DBRT.head3}>Work Station</th>
                  <th className={DBRT.head2}>Work Instruction</th>
                  <th className={DBRT.head3}>WO Execution Operator Name</th>
                  <th className={DBRT.head2}>
                    WO Transformation Completion Date{" "}
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "15px" }}>
                <tr>
                  <td>WO1789</td>
                  <td>COMPLETED</td>
                  <td>TO1360</td>
                  <td>Poland</td>
                  <td>HD191267787</td>
                  <td>67747388390</td>
                  <td>242436-12</td>
                  <td>12</td>
                  <td>COUPLER AC ZOOM</td>
                  <td>BATCH H</td>
                  <td>N/A</td>
                  <td>1</td>
                  <td>EA</td>
                  <td>N/A</td>
                  <td>WKSA17</td>
                  <td>TV-WI-53984</td>
                  <td>6447/Dwarapureddi,Harish</td>
                  <td>Mon, 19 Dec 2022 11:39:38 GMT</td>
                </tr>
              </tbody>
            </table>
            <br />
            <table className={DBRT.tblcontent}>
              <thead>
                <tr>
                  <th className={DBRT.head2}>Component Type</th>
                  <th className={DBRT.head2}>Component Control Number</th>
                  <th className={DBRT.head2}>Revision</th>
                  <th className={DBRT.head2}>Required Quantity</th>
                  <th className={DBRT.head2}>Component Confirmed Quantity</th>
                  <th className={DBRT.head2}>Printed Quantity</th>
                  <th className={DBRT.head2}>Reprint Quantity</th>
                  <th className={DBRT.head2}>Retention sample</th>
                  <th className={DBRT.head2}>Discarded Quantity</th>
                  <th className={DBRT.head2}>Special Instruction</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "15px" }}>
                <tr>
                  <td>Cable</td>
                  <td>CCN1010</td>
                  <td>A</td>
                  <td>1</td>
                  <td>1</td>
                  <td>N/A</td>
                  <td>0</td>
                  <td>N/A</td>
                  <td>0</td>
                  <td>N/A</td>
                </tr>

                <tr>
                  <td>IFU</td>
                  <td>CCN101022</td>
                  <td>A</td>
                  <td>1</td>
                  <td>1</td>
                  <td>N/A</td>
                  <td>0</td>
                  <td>N/A</td>
                  <td>0</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>

            <div className={DBRT.URtitile}>
              <h6
                style={{ textAlign: "left", color: "black", marginTop: "10px" }}
              >
                PART 2 : VERIFICATION - INSPECTION OPERATOR
              </h6>
            </div>
            <table className={DBRT.tblcontent}>
              <thead>
                <tr>
                  <th className={DBRT.head2}>Product Inspection Results</th>
                  <th className={DBRT.head2}>Rejected Quanity</th>
                  <th className={DBRT.head2}>Accepted Quanity</th>
                  <th className={DBRT.head2}>Reason Code</th>
                  <th className={DBRT.head2}>Reject Reason</th>
                  <th className={DBRT.head2}>QI Operator Name</th>
                  <th className={DBRT.head2}>Verification Signature Date</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>ACCEPT</td>
                  <td>N/A</td>
                  <td>1</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>643030301 </td>
                  <td>Thu, 29 Dec 2022 11:43:37 GMT</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default DBRecordTable;

// import React from "react";
// //import {FcFilledFilter} from "react-icons/fc";
// import DBRT from "./DBRecordTable.module.css";

// export const DBRecordTable = () => {
//   return (
//     <>
//       <div className={DBRT.tab2Body}>
//         <div className={DBRT.URtitile}>
//           <h2 style={{ color: "white", fontFamily: "serif" }}>
//             DIGITAL BATCH RECORD
//           </h2>
//           <br />
//           <h6 style={{ textAlign: "left", color: "white" }}>
//             PART 1 : PRODUCT TRANSFORMATION - TRANSFORMATION OPERATOR
//           </h6>
//         </div>

//         <div className={DBRT.tableDataContainer}>
//           <form method="POST">
//             <table className={DBRT.tableData}>
//               <thead className={DBRT.dbThead}>
//                 <tr>
//                   <th scope="col">Work Order Number</th>
//                   <th scope="col">Work Order Status</th>
//                   <th scope="col">Transform Order Number</th>
//                   <th scope="col">Ship to Country</th>
//                   <th scope="col">Transformation Request</th>
//                   <th scope="col">GTIN</th>
//                   <th scope="col">Product Number</th>
//                   <th scope="col">Variety/Mode Code</th>
//                   <th scope="col">Product Description</th>
//                   <th scope="col">Batch Number</th>
//                   <th scope="col">Serial No</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Unit of Measurement</th>
//                   <th scope="col">Comment</th>
//                   <th scope="col">Work Station</th>
//                   <th scope="col">Work Instruction</th>
//                   <th scope="col">WO Execution Operator Name</th>
//                   <th scope="col">WO Transformation Completion Date </th>
//                 </tr>
//               </thead>
//               <tbody className={DBRT.dbTbody} style={{ fontSize: "15px" }}>
//                 <tr>
//                   <td>WO1789</td>
//                   <td>COMPLETED</td>
//                   <td>TO1360</td>
//                   <td>Poland</td>
//                   <td>HD191267787</td>
//                   <td>67747388390</td>
//                   <td>242436-12</td>
//                   <td>12</td>
//                   <td>COUPLER AC ZOOM</td>
//                   <td>BATCH H</td>
//                   <td>N/A</td>
//                   <td>1</td>
//                   <td>EA</td>
//                   <td>N/A</td>
//                   <td>WKSA17</td>
//                   <td>TV-WI-53984</td>
//                   <td>6447/Dwarapureddi,Harish</td>
//                   <td>Mon, 19 Dec 2022 11:39:38 GMT</td>
//                 </tr>
//               </tbody>
//             </table>
//             <br />
//             <table>
//               <thead className={DBRT.dbThead}>
//                 <tr>
//                   <th scope="col">Component Type</th>
//                   <th scope="col">Component Control Number</th>
//                   <th scope="col">Revision</th>
//                   <th scope="col">Required Quantity</th>
//                   <th scope="col">Component Confirmed Quantity</th>
//                   <th scope="col">Printed Quantity</th>
//                   <th scope="col">Reprint Quantity</th>
//                   <th scope="col">Retention sample</th>
//                   <th scope="col">Discarded Quantity</th>
//                   <th scope="col">Special Instruction</th>
//                 </tr>
//               </thead>
//               <tbody className={DBRT.dbTbody} style={{ fontSize: "15px" }}>
//                 <tr>
//                   <td>Cable</td>
//                   <td>CCN1010</td>
//                   <td>A</td>
//                   <td>1</td>
//                   <td>1</td>
//                   <td>N/A</td>
//                   <td>0</td>
//                   <td>N/A</td>
//                   <td>0</td>
//                   <td>N/A</td>
//                 </tr>

//                 <tr>
//                   <td>IFU</td>
//                   <td>CCN101022</td>
//                   <td>A</td>
//                   <td>1</td>
//                   <td>1</td>
//                   <td>N/A</td>
//                   <td>0</td>
//                   <td>N/A</td>
//                   <td>0</td>
//                   <td>N/A</td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className={DBRT.URtitile}>
//               <br />
//               <h6 style={{ textAlign: "left", color: "white" }}>
//                 PART 2 VERIFICATION : INSPECTION OPERATOR
//               </h6>
//             </div>
//             <table>
//               <thead className={DBRT.dbThead}>
//                 <tr>
//                   <th scope="col">Product Inspection Results</th>
//                   <th scope="col">Rejected Quanity</th>
//                   <th scope="col">Accepted Quanity</th>
//                   <th scope="col">Reason Code</th>
//                   <th scope="col">Reject Reason</th>
//                   <th scope="col">QI Operator Name</th>
//                   <th scope="col">Verification Signature Date</th>
//                 </tr>
//               </thead>
//               <tbody className={DBRT.dbTbody}>
//                 <tr style={{ fontSize: "15px" }}>
//                   <td>ACCEPT</td>
//                   <td>N/A</td>
//                   <td>1</td>
//                   <td>N/A</td>
//                   <td>N/A</td>
//                   <td>643030301 / Allugunti ,Aswini</td>
//                   <td>Mon, 19 Dec 2022 11:43:37 GMT</td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DBRecordTable;
