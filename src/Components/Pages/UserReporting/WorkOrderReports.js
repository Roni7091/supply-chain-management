import React from "react";
import WOR from "./WOReports.module.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import WORtable from "./WORtable";

const WorkOrderReports = () => {
  const [toggleT2, setToggleT2] = useState(false);
  const toggleHandlerT2 = () => {
    setToggleT2(!toggleT2);
  };

  return (
    <>
      <div className={WOR.worContainer}>
        <div className={WOR.TObody}>
          <form className={WOR.woForm}>
            <div className={WOR.worFormBody}>
              <div className={WOR.worFormRow1}>
                <div>
                  {" "}
                  <label htmlFor="" className={WOR.worlabel}>
                    Transformation Site
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="" className={WOR.worlabel}>
                    Transform Order Number
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="" className={WOR.worlabel}>
                    Ship to Country
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="" className={WOR.worlabel}>
                    Work Order Status{" "}
                  </label>
                </div>
                <div>
                  {" "}
                  <label htmlFor="" className={WOR.worlabel}>
                    Work Order Number
                  </label>
                </div>
              </div>
              <div className={WOR.worFormRow2}>
                <div>
                  <select id="sites" name="sites" className={WOR.worselect}>
                    <option value="111">Courcelles,Belgium</option>
                    <option value="222">Saab</option>
                    <option value="333">Fiat</option>
                    <option value="444">Audi</option>
                  </select>
                </div>
                <div>
                  <input type="text" className={WOR.worinput} />
                </div>
                <div>
                  <input type="text" className={WOR.worinput} />
                </div>
                <div>
                  <select id="status" name="status" className={WOR.worselect}>
                    <option value="111">
                      {" "}
                      <input type="checkbox" className={WOR.worInp} /> CANCEL
                    </option>
                    <option value="222">
                      <input type="checkbox" className={WOR.worInp} />
                      COMPLETED
                    </option>
                    <option value="333">
                      <input type="checkbox" className={WOR.worInp} />
                      CREATED
                    </option>
                    <option value="444">
                      <input type="checkbox" className={WOR.worInp} />
                      IN-PROCESS
                    </option>
                    <option value="444">
                      <input type="checkbox" className={WOR.worInp} />
                      ON-HOLD
                    </option>
                  </select>
                </div>
                <div>
                  <input type="text" className={WOR.worinput} />
                </div>
                <div>
                  <label htmlFor="" className={WOR.worlabel}>
                    Product Number
                  </label>
                  <input type="text" className={WOR.worinput} />
                </div>
                <div>
                  <label htmlFor="" className={WOR.worlabel}>
                    Product Number
                  </label>
                  <input
                    type="date"
                    onFocus="(this.type='date')"
                    className={WOR.worinput}
                  />
                </div>
                <div>
                  <label htmlFor="" className={WOR.worlabel}>
                    Product Number
                  </label>
                  <input type="text" className={WOR.worinput} />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "block",
            justifyContent: "space-between",
          }}
        >
          <button className={WOR.searchbtn} onClick={toggleHandlerT2}>
            <IoMdSearch style={{ marginBottom: "3px" }} />
            SEARCH
          </button>
          <button className={WOR.clearbtn} onClick={toggleHandlerT2}>
            CLEAR
          </button>
        </div>
        <div
          style={{
            display: "block",
            justifyContent: "center",
            paddingBottom: "20px",
            padding: "6px",
          }}
        >
          {toggleT2 ? <WORtable /> : null}
        </div>
      </div>
    </>
  );
};

export default WorkOrderReports;
