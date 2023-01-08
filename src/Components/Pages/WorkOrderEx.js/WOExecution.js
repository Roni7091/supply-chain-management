import { useState, React } from "react";
import WOE from "./WOExecution.module.css";
import { BsUpcScan } from "react-icons/bs";
import WOEform from "./WOEform";
import Navbar21 from "../Navbar21";

const WOExecution = () => {
  const [toggleWOEF, setToggleWOEF] = useState(false);
  const toggleWOEFHandler3 = () => {
    setToggleWOEF(!toggleWOEF);
  };

  return (
    <>
      <Navbar21 name="Work Order Execution" />
      <div className={WOE.woecontainer}>
        <div className={WOE.huContainer}>
          <label className={WOE.huLabel} htmlFor="hu">
            <BsUpcScan
              size={15}
              style={{ marginTop: "5px", marginRight: "50px" }}
            />{" "}
            <h4 className={WOE.lbh}> HU NUMBER</h4>
          </label>
          <input
            type="text"
            name="hu"
            onChange={toggleWOEFHandler3}
            style={{ height: "30px" }}
          />
        </div>

        {toggleWOEF ? <WOEform /> : null}
      </div>
    </>
  );
};

export default WOExecution;
