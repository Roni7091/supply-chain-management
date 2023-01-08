import React from "react";
import WOEt1 from "./WOEtab.module.css";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillFileExcel } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

const WOEtab1 = () => {
  return (
    <>
      <div className={WOEt1.t1container}>
        <div className={WOEt1.t1title}>
          <div>
            <h4 className={WOEt1.woeTtitle}>WORK ORDER DETAILS</h4>
          </div>
          <div>
            <BsFileEarmarkPdfFill size={20} style={{ color: "red" }} />
            <AiFillFileExcel size={22} style={{ color: "green" }} />
          </div>
        </div>

        <table className={WOEt1.tblcontent}>
          <thead>
            <tr>
              <th className={WOEt1.head2}>
                Work Order Number
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Work Order Status
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Work Order Quanity
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Material Number
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                GTIN
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Variant / Mode Code
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Batch Number
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                UOM
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Comments
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Master Data Error...
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
              <th className={WOEt1.head2}>
                Re-Read
                <BiFilterAlt size={17} style={{ marginLeft: "20px" }} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px" }}>
              <td>643030301 </td>
              <td>ACCEPT</td>
              <td>N/A</td>
              <td>1</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>GN46A</td>
              <td>edit</td>
              <td>edit</td>
              <td>edit</td>
              <td>edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WOEtab1;
