import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImUpload3 } from "react-icons/im";
import Alerts from "./alerts.module.css";
import SaveAlert from "./SaveAlert";
import FileAlert from "./FileAlert";
import SelectFile from "./SelectFile";

const CardTable = () => {
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
    <>
      <div>
        <table className={Alerts.tblcontent}>
          <thead>
            <tr>
              <th>List No</th>
              <th className={Alerts.head2}>Component Type</th>
              <th className={Alerts.head2}>Component Control No</th>
              <th className={Alerts.head4}>Revision</th>
              <th className={Alerts.head2}>CM Franchise key</th>
              <th className={Alerts.head3}>CM status</th>
              <th>three</th>
              <th className={Alerts.head2}>Content file</th>
              <th className={Alerts.head2}>Alternate refference No</th>
              <th className={Alerts.head2}>CM CNN Change Order No</th>
              <th className={Alerts.head2}>Rsc Change Order No</th>
              <th className={Alerts.head2}>Created By</th>
              <th className={Alerts.head3}>Created On</th>
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
              <td>
                <ImUpload3 />
              </td>
              <td>2odin</td>
              <td>input</td>
              <td>SelectDr</td>
              <td>C-1008761</td>
              <td>Vish</td>
              <td>Dec19,2022</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>hoihd</td>
              <td>2odin</td>
              <td>1</td>
              <td>2</td>
              <td>
                <ImUpload3 />
              </td>
              <td>2odin</td>
              <td>1</td>
              <td>2</td>
              <td>hoihd</td>
              <td>2odin</td>
              <td>2odin</td>
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

        <div>
          {greenpopup ? (
            <SaveAlert greenpopup={greenpopup} setGreenPopUp={setGreenPopUp} />
          ) : null}

          {info ? (
            <FileAlert
              info={info}
              setInfo={setInfo}
              select={select}
              setSelect={setSelect}
            />
          ) : null}
          {select ? <SelectFile select={select} setSelect={setSelect} /> : null}
        </div>
      </div>
    </>
  );
};

export default CardTable;

// <SaveAlert />
