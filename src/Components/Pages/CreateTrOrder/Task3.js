import React, { useState } from "react";
import { AiFillMacCommand } from "react-icons/ai";
import files from "./task3.module.css";
import Popalert from "./Popalert";

import { BiBarcodeReader } from "react-icons/bi";
import CtrTable from "./CtrTable";
import Task3Popup from "./Task3Popup";
import Navbar21 from "../Navbar21";
const Task3 = () => {
  const [popsk, setPopSk] = useState(false);

  const handlePopSk = (e) => {
    e.preventDefault();
    setPopSk(!popsk);
  };
  return (
    <>
      <div className={files.task3nav}>
        <Navbar21 name="Create Transformation Order" />
      </div>
      <div className={files.topmain}>
        <form className={files.toform}>
          <div className={files.qrmain}>
            <div className={files.qrcode}>
              <BiBarcodeReader size={20} className={files.qrcode1} />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="1T000100657" />
          </div>

          <div className={files.samaininputs2}>
            <div>
              <label>Transform order No</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transform Order Status</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Sales Order</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={files.samaininputs3}>
            <div>
              <label>Enter Delivery</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Ship to country</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transformation site</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={files.samaininputs}>
            <div>
              <label>Enter GST IN</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Enter Batch</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Enter material</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Enter Variant</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Enter Quantity</label>
              <br />
              <input type="hello" />
            </div>
          </div>
          <div className={files.btnsks}>
            <button className="creatbtn1">Save</button>
            <button className="creatbtn2">RRMData</button>
            <button onClick={handlePopSk} className="creatbtn3">
              CreateWO
            </button>
          </div>
          <div className={files.saemtybox}>
            <CtrTable />
          </div>
        </form>
        {popsk ? <Task3Popup popsk={popsk} setPopSk={setPopSk} /> : null}
      </div>
    </>
  );
};

export default Task3;

// <div className={files.satobar}>
// <input type="checkbox" />
// </div>
// <div className={files.saboxcontent}>
// <h1>Table data</h1>
// </div>

// import React, { useState } from "react";
// import "./design/Task2.css";
// import { FaPowerOff } from "react-icons/fa";
// import { BsBellFill } from "react-icons/bs";
// import { BsFillQuestionOctagonFill } from "react-icons/bs";
// import { AiFillMacCommand } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Popalert from "./Popalert";

// const Task2 = () => {
//   const [toogle, setToogle] = useState(false);
//   const toogleHandler = () => {
//     setToogle(!toogle);
//   };

//   return (
//     <div className="topp">
//       <div className="nav">
//         <button className="abb">
//           {" "}
//           <GiHamburgerMenu />{" "}
//         </button>
//         <h6>Right Stage Customization</h6>
//         <h4>Create Transformation Order</h4>
//         <h3>Welcome Shubham Raj</h3>
//         <div className="placed">
//           <button className="moves">
//             <BsBellFill />
//           </button>
//           <button className="moves">
//             <BsFillQuestionOctagonFill />
//           </button>

//           <button className="moves">
//             <FaPowerOff />
//           </button>
//         </div>
//       </div>

//       <div className="second">
//         <label className="hii">
//           {" "}
//           <AiFillMacCommand /> MU NUMBER
//         </label>
//         <input type="text" className="hlo" placeholder="HD12123145_12" />
//       </div>

//       <div className="third">
//         <div>
//           <label htmlFor="" className="spaces">
//             {" "}
//             #Transform Order Number:
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className="space"
//             placeholder="123456"
//           />
//         </div>

//         <div>
//           <label htmlFor="" className="spaces">
//             {" "}
//             Transform Order Status:
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className="space"
//             placeholder="CREATED"
//           />
//         </div>

//         <div>
//           <label htmlFor="" className="spaces">
//             *sales order #
//           </label>{" "}
//           <br />
//           <input type="text" name="" id="" className="space" placeholder="SO" />
//         </div>
//       </div>

//       <div className="four">
//         <div>
//           <label htmlFor="" className="ppp1">
//             {" "}
//             Enter Delivery:
//           </label>{" "}
//           <br />
//           <input type="text" name="" id="" className="space" placeholder="US" />
//         </div>

//         <div>
//           <label htmlFor="" className="ppp2">
//             * Ship To Country
//           </label>{" "}
//           <br />
//           <select className="movess" placeholder="Enter Country Name">
//             <option value="none">None</option>
//             <option value="Afghanistan">Afghanistan</option>
//             <option value="Algeria">Algeria</option>
//             <option value="Australia">Australia</option>
//             <option value="Japan">Japan</option>
//             <option value="Africa">Africa</option>
//             <option value="Argentina">Argentina</option>
//             <option value="China">China</option>
//             <option value="India">India</option>
//             <option value="Pakistan">Pakistan</option>
//             <option value="Canada">Canada</option>
//             <option value="Cuba">Cuba</option>
//             <option value="Finland">Finland</option>
//             <option value="Dubai">Dubai</option>
//             <option value="Afganistan">Afganistan</option>
//             <option value="America">America</option>
//             <option value="Russia">Russia</option>
//             <option value="Nepal">Nepal</option>
//             <option value="Indonesia">Indonesia</option>
//             <option value="Malaysia">Malaysia</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="" className="ppp3">
//             Transformation Site
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className="space"
//             placeholder="Bengalaru,India"
//           />
//         </div>
//       </div>

//       <div className="sixx">
//         <div>
//           <label htmlFor="" className="ok1">
//             {" "}
//             *Enter GSTIN{" "}
//           </label>{" "}
//           <br />
//           <input type="text" className="ok5" />
//         </div>
//         <div>
//           <label htmlFor="" className="ok1">
//             {" "}
//             *ENTER Batch
//           </label>{" "}
//           <br />
//           <input type="text" className="ok5" />
//         </div>
//         <div>
//           <label htmlFor="" className="ok3">
//             {" "}
//             *ENTER Material
//           </label>{" "}
//           <br />
//           <select>
//             <option value="">LABEL1 MATERIAL........</option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="" className="ok1">
//             {" "}
//             ENTER Variant
//           </label>{" "}
//           <br />
//           <input type="text" className="ok5" />
//         </div>
//       </div>
//       <div className="tik">
//         <button className="tok">save</button>
//       </div>
//       <div className="tik">
//         <button className="tok1">RE-Read Master Data</button>

//         <button onClick={toogleHandler} className="tok2">
//           Create Wo{" "}
//         </button>
//         <div className="poptop">
//           {toogle ? <Popalert toogle={toogle} setToogle={setToogle} /> : null}
//         </div>
//       </div>

//       <div className="five">
//         <b>Total Number Of Items(1):</b>
//       </div>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>
//                 {" "}
//                 <input type="checkbox" />{" "}
//               </th>
//               <th></th>
//               <th>Product Code </th>
//               <th> Product Description</th>
//               <th> Variant/ Mode Code</th>
//               <th> GTIN</th>
//               <th> Quantity </th>
//               <th> UCOM</th>
//               <th> Batch</th>
//               <th> Dom</th>
//               <th>SLED</th>
//               <th>Comments</th>
//               <th>Master Data Error..</th>
//               <th>Work Order#</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 {" "}
//                 <input type="checkbox" />
//               </td>
//               <td></td>
//               <td>242436-12</td>
//               <td>COUPLER AC ZOOM </td>
//               <td>12</td>
//               <td>108869962556</td>
//               <td>1</td>
//               <td>EA</td>
//               <td>BATCHH</td>
//               <td></td>
//               <td></td>
//               <td>MDM CHECK SUCCESS</td>
//               <td>N/A</td>
//               <td></td>
//             </tr>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>

//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Task2;

// import React, { useState } from "react";
// import { AiFillMacCommand } from "react-icons/ai";
// import Shubcss from "./shubham.module.css";
// import Popalert from "./Popalert";

// const Task2 = () => {
//   const [toogle, setToogle] = useState(false);
//   const toogleHandler = () => {
//     setToogle(!toogle);
//   };
//   return (
//     <div>
//       <div className={Shubcss.test}>HEllo</div>
//       <section className={Shubcss.firstshubh}>
//         <div>
//           <label className={Shubcss.hii}>
//             <AiFillMacCommand size={40} /> MU NUMBER
//           </label>
//           <input
//             type="text"
//             className={Shubcss.hlo}
//             placeholder="HD12123145_12"
//           />
//         </div>
//       </section>

//       <section className={Shubcss.secondshubh}>
//         <div>
//           <label htmlFor="" className={Shubcss.spaces}>
//             #Transform Order Number:
//           </label>
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className={Shubcss.space}
//             placeholder="123456"
//           />
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.spaces}>
//             Transform Order Status:
//           </label>
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className={Shubcss.space}
//             placeholder="CREATED"
//           />
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.spaces}>
//             *sales order #
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className={Shubcss.space}
//             placeholder="SO"
//           />
//         </div>
//       </section>

//       <section className={Shubcss.thirdshubh}>
//         <div>
//           <label htmlFor="" className={Shubcss.ppp1}>
//             {" "}
//             Enter Delivery:
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className={Shubcss.space}
//             placeholder="US"
//           />
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.ppp2}>
//             * Ship To Country
//           </label>{" "}
//           <br />
//           <select className={Shubcss.movess} placeholder="Enter Country Name">
//             <option value="none">None</option>
//             <option value="Afghanistan">Afghanistan</option>
//             <option value="Algeria">Algeria</option>
//             <option value="Australia">Australia</option>
//             <option value="Japan">Japan</option>
//             <option value="Africa">Africa</option>
//             <option value="Argentina">Argentina</option>
//             <option value="China">China</option>
//             <option value="India">India</option>
//             <option value="Pakistan">Pakistan</option>
//             <option value="Canada">Canada</option>
//             <option value="Cuba">Cuba</option>
//             <option value="Finland">Finland</option>
//             <option value="Dubai">Dubai</option>
//             <option value="Afganistan">Afganistan</option>
//             <option value="America">America</option>
//             <option value="Russia">Russia</option>
//             <option value="Nepal">Nepal</option>
//             <option value="Indonesia">Indonesia</option>
//             <option value="Malaysia">Malaysia</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="" className={Shubcss.ppp3}>
//             Transformation Site
//           </label>{" "}
//           <br />
//           <input
//             type="text"
//             name=""
//             id=""
//             className={Shubcss.space}
//             placeholder="Bengalaru,India"
//           />
//         </div>
//       </section>

//       <section className={Shubcss.fourshubh}>
//         <div>
//           <label htmlFor="" className={Shubcss.ok1}>
//             {" "}
//             *Enter GSTIN{" "}
//           </label>{" "}
//           <br />
//           <input type="text" className={Shubcss.ok5} />
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.ok1}>
//             {" "}
//             *ENTER Batch
//           </label>{" "}
//           <br />
//           <input type="text" className={Shubcss.ok5} />
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.ok3}>
//             {" "}
//             *ENTER Material
//           </label>{" "}
//           <br />
//           <select>
//             <option value="">LABEL1 MATERIAL........</option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="" className={Shubcss.ok1}>
//             {" "}
//             ENTER Variant
//           </label>{" "}
//           <br />
//           <input type="text" className={Shubcss.ok5} />
//         </div>
//       </section>

//       <section className={Shubcss.fiveshubh}>
//         <button className={Shubcss.tok}>save</button>
//       </section>
//       <section className={Shubcss.sixshubh}>
//         <div>
//           <button className={Shubcss.tok1}>RE-Read Master Data</button>

//           <button onClick={toogleHandler} className={Shubcss.tok2}>
//             Create Wo{" "}
//           </button>
//           <div className={Shubcss.poptop}>
//             {toogle ? <Popalert toogle={toogle} setToogle={setToogle} /> : null}
//           </div>
//         </div>
//       </section>
//       <section className={Shubcss.sevenshubh}>
//         <b style={{ color: "black" }}>Total Number Of Items(1):</b>
//       </section>
//       <section className={Shubcss.eightshubh}>
//         <table>
//           <thead>
//             <tr>
//               <th>
//                 {" "}
//                 <input type="checkbox" />{" "}
//               </th>
//               <th></th>
//               <th>Product Code </th>
//               <th> Product Description</th>
//               <th> Variant/ Mode Code</th>
//               <th> GTIN</th>
//               <th> Quantity </th>
//               <th> UCOM</th>
//               <th> Batch</th>
//               <th> Dom</th>
//               <th>SLED</th>
//               <th>Comments</th>
//               <th>Master Data Error..</th>
//               <th>Work Order#</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 {" "}
//                 <input type="checkbox" />
//               </td>
//               <td></td>
//               <td>242436-12</td>
//               <td>COUPLER AC ZOOM </td>
//               <td>12</td>
//               <td>108869962556</td>
//               <td>1</td>
//               <td>EA</td>
//               <td>BATCHH</td>
//               <td></td>
//               <td></td>
//               <td>MDM CHECK SUCCESS</td>
//               <td>N/A</td>
//               <td></td>
//             </tr>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>

//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default Task2;
