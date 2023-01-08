import React from "react";
import { GiCancel } from "react-icons/gi";
import Select from "./select.module.css";

import Uploader from "./Uploader";

const SelectFile = ({ select, setSelect }) => {
  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(!select);
  };
  return (
    <>
      <div className={Select.filealert}>
        <div className={Select.filepop}>
          <div className={Select.filehead}>
            <div className={Select.fileloader}>Success Message</div>
            <div>
              <GiCancel onClick={handleSelect} className={Select.red2cancel} />
            </div>
          </div>
          <div className={Select.filebox}>
            <Uploader />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectFile;
