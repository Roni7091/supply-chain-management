import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImUpload3 } from "react-icons/im";
import Alerts from "./componentTable.module.css";

const ComponentTable2 = () => {
  const [greenpopup, setGreenPopUp] = useState(false);
  const [info, setInfo] = useState(false);
  const [select, setSelect] = useState(false);

  const handleGreenPopUp = (e) => {
    e.preventDefault();
    setGreenPopUp(!greenpopup);
  };

  const handleInfo = (e) => {
    e.preventDefault();
    setInfo(!info);
  };

  return (
    <div>
      <div>
        <table className={Alerts.tblcontent}>
          <thead>
            <tr>
              <th>
                <div>
                  <input style={{ width: "20px" }} type="checkbox" />
                </div>
              </th>
              <th>List No</th>
              <th className={Alerts.head2}>Component Type</th>
              <th className={Alerts.head2}>Component Control No</th>
              <th className={Alerts.head4}>Revision</th>
              <th className={Alerts.head2}>CA Franchise key</th>
              <th className={Alerts.head3}>Product code</th>
              <th>three</th>
              <th className={Alerts.head2}>Variant/Mode Code</th>
              <th className={Alerts.head2}>Ship to country</th>
              <th className={Alerts.head2}>CA Status</th>
              <th className={Alerts.head2}>On Hold</th>
              <th className={Alerts.head2}>Franchise</th>
              <th className={Alerts.head3}>Product Discription</th>
              <th className={Alerts.head3}>Content file</th>
              <th className={Alerts.head3}>Alternate Reference No</th>
              <th className={Alerts.head3}>CA CCN Sourse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <input style={{ width: "20px" }} type="checkbox" />
                </div>
              </td>
              <td>Dynamic Label</td>
              <td>HD19122022</td>
              <td>A</td>
              <td>Dropdown</td>
              <td>Created</td>
              <td>
                <ImUpload3 />
              </td>
              <td>2odin</td>
              <td>input</td>
              <td>SelectDr</td>
              <td>C-1008761</td>
              <td>Vish</td>
              <td>Dec19,2022</td>
              <td>Logo</td>
            </tr>
          </tbody>
        </table>
        <div className={Alerts.tablebtns}>
          <div className={Alerts.dltmain}>
            <div>
              <RiDeleteBin6Fill className={Alerts.tablebtn1} />
            </div>
            <p className={Alerts.dlttext}>Delete</p>
          </div>
          <button onClick={handleInfo} className={Alerts.tablebtn2}>
            Save
          </button>
          <button onClick={handleGreenPopUp} className={Alerts.tablebtn3}>
            Save and submit for approval
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ComponentTable2;
