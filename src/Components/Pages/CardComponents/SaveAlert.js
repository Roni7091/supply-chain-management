import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Alerts from "./alerts.module.css";

const SaveAlert = ({ greenpopup, setGreenPopUp }) => {
  const handleGreenCancel = () => {
    setGreenPopUp(!greenpopup);
  };
  return (
    <>
      <div className={Alerts.greenalert}>
        <div className={Alerts.greenpop}>
          <div className={Alerts.greenhead}>
            <div className={Alerts.alertlogo}>
              <BsCheckCircleFill className={Alerts.greencheck} />
            </div>
            <div className={Alerts.greenh1}>Success Message hello</div>
            <div>
              <GiCancel
                onClick={handleGreenCancel}
                className={Alerts.greencancel}
              />
            </div>
          </div>
          <div className={Alerts.greentext}>
            <h1 className={Alerts.greenh1}>
              Hello this is popup message hello ss
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default SaveAlert;
