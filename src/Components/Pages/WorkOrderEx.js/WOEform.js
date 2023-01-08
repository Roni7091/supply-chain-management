import React, { useState } from "react";
import WOEF from "./WOExecution.module.css";
import WOEtab1 from "./WOEtab1";
import { MdOutlineQrCodeScanner } from "react-icons/md";

const WOEFform = () => {
  const [toggleWOEt1, setToggleWOEt1] = useState(false);
  const toggleWOEt1Handler = () => {
    setToggleWOEt1(!toggleWOEt1);
  };

  return (
    <>
      <div className={WOEF.formCon}>
        <form className={WOEF.woeForm}>
          <div className={WOEF.formBody}>
            <div className={WOEF.formLabel1}>
              <div>
                <label htmlFor="" className={WOEF.woLbl}>
                  Transform Order Number
                </label>
              </div>
              <div>
                <label htmlFor="" className={WOEF.woLbl}>
                  Transform Order Status
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  TO Start Date and Time
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  Ship To Country
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  Transformation Site
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  <span style={{ color: "red" }}>*</span>Work Station{" "}
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  <span style={{ color: "red" }}>*</span>A4 Printer{" "}
                </label>
              </div>
              <div>
                {" "}
                <label htmlFor="" className={WOEF.woLbl}>
                  <span style={{ color: "red" }}>*</span>Label Printer{" "}
                </label>
              </div>
            </div>
            <div className={WOEF.formData1}>
              <div>
                <input
                  type="text"
                  placeholder="1387A"
                  className={WOEF.woefInp}
                />
              </div>
              <div>
                <select id="status" name="status" className={WOEF.woefsel}>
                  <option value="111">
                    {" "}
                    <input type="checkbox" /> CANCEL
                  </option>
                  <option value="222">
                    <input type="checkbox" />
                    COMPLETED
                  </option>
                  <option value="333">
                    <input type="checkbox" />
                    CREATED
                  </option>
                  <option value="444">
                    <input type="checkbox" />
                    IN-PROCESS
                  </option>
                  <option value="444">
                    <input type="checkbox" />
                    ON-HOLD
                  </option>
                </select>
              </div>
              <div>
                <input
                  type="datetime-local"
                  onFocus="(this.type='date')"
                  className={WOEF.woefInp}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="1387A"
                  className={WOEF.woefInp}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="1387A"
                  className={WOEF.woefInp}
                />
              </div>
              <div>
                <select id="ws" name="ws" className={WOEF.woefsel}>
                  <option value="111">WKSA14</option>
                  <option value="222">WKSA15</option>
                  <option value="333">WKSA16</option>
                  <option value="444">WKSA17</option>
                </select>
              </div>
              <div>
                <select id="a4" name="a4" className={WOEF.woefsel}>
                  <option value="111">A14</option>
                  <option value="222">A15</option>
                  <option value="333">A16</option>
                  <option value="444">A17</option>
                </select>
              </div>

              <div>
                <select id="lp" name="lp" className={WOEF.woefsel}>
                  <option value="111">lps13</option>
                  <option value="222">lps15</option>
                  <option value="333">lps16</option>
                  <option value="444">lps17</option>
                </select>
              </div>
            </div>
          </div>

          <div className={WOEF.formLabel2}>
            <div>
              {" "}
              <label htmlFor="" className={WOEF.woLbl}>
                <span style={{ color: "red" }}>*</span> Verify Line Clearance
              </label>
            </div>
            <div>
              {" "}
              <label htmlFor="" className={WOEF.woLbl}>
                <span style={{ color: "red" }}>*</span>Material Number / GTIN
              </label>
            </div>
            <div>
              {" "}
              <label htmlFor="" className={WOEF.woLbl}>
                <span style={{ color: "red" }}>*</span>Batch number / Serial No
              </label>
            </div>
          </div>
          <div className={WOEF.formData2}>
            <div>
              <input
                type="checkbox"
                className={WOEF.woefInp}
                style={{ marginTop: "10px" }}
              />
            </div>
            <div>
              <div className={WOEF.iconInp}>
                <MdOutlineQrCodeScanner
                  style={{ color: "rgb(19, 122, 122)" }}
                />
                <input type="text" className={WOEF.iconInp2} />
              </div>
            </div>
            <div>
              <div className={WOEF.iconInp}>
                <MdOutlineQrCodeScanner
                  style={{ color: "rgb(19, 122, 122)" }}
                />
                <input type="text" className={WOEF.iconInp2} />
              </div>
            </div>
          </div>
        </form>
        <div style={{ display: "block", margin: "8.5%" }}>
          {toggleWOEt1 ? <WOEtab1 /> : null}
        </div>
      </div>
    </>
  );
};

export default WOEFform;
