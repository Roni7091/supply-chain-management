import React from "react";
import Secondfile from "./Second.module.css";
import { BiBarcodeReader } from "react-icons/bi";

const Second = () => {
  return (
    <>
      <div className={Secondfile.coantainersa}>
        <form>
          <section className={Secondfile.tabHead}>
            <div classname={Secondfile.containersn}>
              <div classname={Secondfile.py4}>
                <table className={Secondfile.tablebordershadow}>
                  <thead className={Secondfile.theadprimary}>
                    <tr>
                      <th>
                        <input className={Secondfile.satobar} type="checkbox" />{" "}
                      </th>
                      <th scope="col">Product Code</th>
                      <th scope="col">Product Description</th>
                      <th scope="col">Variant</th>
                      <th scope="col">GSTIN</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">UOM</th>
                      <th scope="col"> Batch</th>
                      <th scope="col">DOM</th>
                      <th scope="col">SLED</th>
                      <th scope="col">Comments</th>
                      <th scope="col">Master Data Error</th>
                      <th scope="col">Work Order #</th>
                    </tr>
                  </thead>
                  <tbody className={Secondfile.line123}>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td style={{ color: "black" }}>242436-12</td>
                      <td style={{ color: "black" }}>COUPLER AC ZOOM</td>
                      <td style={{ color: "black" }}>12</td>
                      <td style={{ color: "black" }}>10886705028634</td>
                      <td style={{ color: "black" }}>1</td>
                      <td style={{ color: "black" }}>EA</td>
                      <td style={{ color: "black" }}>BATCHHH</td>
                      <td></td>
                      <td></td>
                      <td style={{ color: "black" }}>MDM Check Success</td>
                      <td style={{ color: "black" }}>N/A</td>
                      <td className={Secondfile.blueWO1789}>WO1789</td>
                    </tr>

                    <tr>
                      <td>
                        <input type="checkbox" />
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
                    </tr>

                    <tr>
                      <td>
                        <input type="checkbox" />
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
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
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
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Second;
