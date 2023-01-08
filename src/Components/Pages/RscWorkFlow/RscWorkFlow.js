import React, { useState } from "react";
import "./rscworkflow.css";
import { AiOutlineFileSync } from "react-icons/ai";
import { MdPermDataSetting } from "react-icons/md";
import { MdDataExploration } from "react-icons/md";
import RscTable from "./RscTable";
import SigninPopup from "./SigninPopup";
import Navbar21 from "../Navbar21";

const RscWorkFlow = () => {
  const [rsctable, setRscTable] = useState(false);
  const [signin, setSignin] = useState(false);

  const handleRscTable = (e) => {
    e.preventDefault();
    setRscTable(!rsctable);
  };

  return (
    <div className="rsc-container">
      <div className="rscnavbar">
        <Navbar21 name="Create Transformation Order" />
      </div>
      <div className="optional-btn">
        <div className="main">
          <div className="red-border" tabIndex={1}>
            <div className="red-bg">
              <div className="red-bg-logo">
                <AiOutlineFileSync
                  size={30}
                  color={"red"}
                  style={{ marginLeft: "5px", marginTop: "5px" }}
                />
              </div>
              <div className="rsc-label">label</div>
            </div>
          </div>
          <div className="red-border" tabIndex={1}>
            <div className="gray-bg">
              <div className="red-bg-logo">
                <MdPermDataSetting
                  size={30}
                  color={"black"}
                  style={{ marginLeft: "5px", marginTop: "5px" }}
                />
              </div>
              <div className="rsc-label">label2</div>
            </div>
          </div>
          <div className="red-border" tabIndex={1}>
            <div className="pink-bg">
              <div className="red-bg-logo">
                <MdDataExploration
                  size={30}
                  color={"green"}
                  style={{ marginLeft: "5px", marginTop: "5px" }}
                />
              </div>
              <div className="rsc-label">label3</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form className="rscinputs">
          <div>
            <label>Component Type</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Component Conytrol No </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Rivision </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>CM Franchise key </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Ulternate Refferene key </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>CM CCN Change order No </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Rsc Change order No </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Changed By </label>
            <br />
            <input type="text" />
          </div>

          <div className="rsc-btns">
            <button onClick={handleRscTable} className="creatbtn1">
              CREATE
            </button>

            <button className="creatbtn4">RESET</button>
            <p className="creatbtn5"> 🔼 Minimize</p>
          </div>
        </form>
        <div className="rsc-table">
          {rsctable ? <RscTable signin={signin} setSignin={setSignin} /> : null}
        </div>
      </div>
      {signin ? <SigninPopup signin={signin} setSignin={setSignin} /> : null}
    </div>
  );
};

export default RscWorkFlow;

// <SaveAlert />
