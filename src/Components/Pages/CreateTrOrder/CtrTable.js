import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImUpload3 } from "react-icons/im";
import Alerts from "./ctrtable.module.css";

const CtrTable = () => {
  return (
    <div>
      <div>
        <table className={Alerts.tblcontent}>
          <thead>
            <tr>
              <th>
                <div className={Alerts.head99}>
                  <input className={Alerts.headCheck} type="checkbox" />
                </div>
              </th>
              <th className={Alerts.head2}></th>
              <th className={Alerts.head2}>Product code</th>
              <th className={Alerts.head4}>Product Description</th>
              <th className={Alerts.head2}>Varient/mode code</th>
              <th className={Alerts.head3}>GTIN</th>
              <th>Quantity</th>
              <th className={Alerts.head2}>Ucom</th>
              <th className={Alerts.head2}>Batch</th>
              <th className={Alerts.head2}>DOM</th>
              <th className={Alerts.head2}>SLED</th>
              <th className={Alerts.head2}>Comments</th>
              <th className={Alerts.head3}>Master Data Error</th>
              <th className={Alerts.head3}>Work Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={Alerts.head99}>
                  <input className={Alerts.headCheck} type="checkbox" />
                </div>
              </td>
              <td></td>
              <td>HD19122022</td>
              <td>Coupler Ac Zoom</td>
              <td>12</td>
              <td>10088633</td>
              <td>1</td>
              <td>EA</td>
              <td>Batch</td>
              <td> </td>
              <td></td>
              <td>MDM-Check Success</td>
              <td>NA</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className={Alerts.head99}>
                  <input className={Alerts.headCheck} type="checkbox" />
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CtrTable;

// <SaveAlert />
