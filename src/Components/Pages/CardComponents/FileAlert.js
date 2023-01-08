import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import Alerts2 from "./filealert.module.css";

const SaveAlert = ({ info, setInfo, select, setSelect }) => {
  const handleInfoPopUp = () => {
    setInfo(!info);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(!select);
  };

  return (
    <>
      <div className={Alerts2.greenalert}>
        <div className={Alerts2.infopop}>
          <div className={Alerts2.infohead}>
            <div className={Alerts2.infologo}>
              <AiFillInfoCircle className={Alerts2.greeninfo} />
            </div>
            <div className={Alerts2.greenh2}>Success Message</div>
            <div>
              <GiCancel
                onClick={handleInfoPopUp}
                className={Alerts2.redcancel}
              />
            </div>
          </div>
          <div className={Alerts2.greentext}>
            <h1 className={Alerts2.greenh2}>Hello this is popup message</h1>
          </div>
          <div className={Alerts2.infobtns}>
            <button onClick={handleSelect} className={Alerts2.ibtn1}>
              yes
            </button>
            <button onClick={handleInfoPopUp} className={Alerts2.ibtn2}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveAlert;
