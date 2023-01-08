import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Alerts from "./task3popup.module.css";

const Task3Popup = ({ popsk, setPopSk }) => {
  const handlePopSk = () => {
    setPopSk(!popsk);
  };
  return (
    <>
      <div className={Alerts.greenalert}>
        <div className={Alerts.greenpop}>
          <div className={Alerts.greenhead}>
            <div className={Alerts.alertlogo}>
              <BsCheckCircleFill className={Alerts.greencheck} />
            </div>
            <div className={Alerts.greenh1}>
              Work Order has been created successfully
            </div>
            <div>
              <GiCancel onClick={handlePopSk} className={Alerts.greencancel} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task3Popup;
