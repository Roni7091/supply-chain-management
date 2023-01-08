import React, { useState } from "react";
import "./link.css";

import CardTable from "./CardTable";
import Navbar21 from "../Navbar21";

const Link1 = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="container-link1">
      <Navbar21 name="Master component" />
      <div>
        <form className="cminputs-v">
          <div>
            <label>Component Type</label>
            <br />
            <input type="hello" />
          </div>
          <div>
            <label>Component </label>
            <br />
            <input type="hello" />
          </div>
          <div>
            <label>Rivision </label>
            <br />
            <input type="hello" />
          </div>
          <div className="cm-btns-v">
            <button onClick={toggleHandler} className="creatbtn1">
              CREATE
            </button>
            <button className="creatbtn2">CHANGE</button>
            <button className="creatbtn3">DISPLAY</button>
            <button className="creatbtn4">RESET</button>
            <p className="creatbtn5"> 🔼 Minimize</p>
          </div>
        </form>
        <div>
          {toggle ? (
            <div>
              <CardTable />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Link1;

// <div className={navfile.Container}>
// <nav className={navfile.navtop}>
//   <div className={navfile.dropdown}>
//     <GiHamburgerMenu size={20} />
//   </div>
//   <div className={navfile.txt}>
//     <h3>Dummy Text</h3>
//   </div>
// </nav>

// <div className={navfile.menu_class}></div>
// </div>

// import React from "react";
// import "./link.css";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// const Link1 = () => {
//   return (
//     <div className="container">
//       <div>
//         <a href="https://usecheck.com/" className="btn-shine" target="_blank">
//           Component Master
//         </a>
//       </div>
//       <div>
//         <form className="cminputs">
//           <div>
//             <label>Component Type</label>
//             <br />
//             <input type="hello" />
//           </div>
//           <div>
//             <label>Component </label>
//             <br />
//             <input type="hello" />
//           </div>
//           <div>
//             <label>Rivision </label>
//             <br />
//             <input type="hello" />
//           </div>
//           <div className="cm-btns">
//             <button className="creatbtn1">CREATE</button>
//             <button className="creatbtn2">CHANGE</button>
//             <button className="creatbtn3">DISPLAY</button>
//             <button className="creatbtn4">RESET</button>
//             <p className="creatbtn5"> 🔼 Minimize</p>
//           </div>
//         </form>
//         <div>
//           <table className="tbl-content">
//             <thead>
//               <tr>
//                 <th>List No</th>
//                 <th className="head2">Component Type</th>
//                 <th className="head2">Component Control No</th>
//                 <th className="head4">Revision</th>
//                 <th className="head2">CM Franchise key</th>
//                 <th className="head3">CM status</th>
//                 <th>three</th>
//                 <th className="head2">Content file</th>
//                 <th className="head2">Alternate refference No</th>
//                 <th className="head2">CM CNN Change Order No</th>
//                 <th className="head2">Rsc Change Order No</th>
//                 <th className="head2">Created By</th>
//                 <th className="head3">Created On</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Dynamic Label</td>
//                 <td>HD19122022</td>
//                 <td>A</td>
//                 <td>Dropdown</td>
//                 <td>Created</td>
//                 <td>Upload</td>
//                 <td>2odin</td>
//                 <td>input</td>
//                 <td>SelectDr</td>
//                 <td>C-1008761</td>
//                 <td>Vish</td>
//                 <td>Dec19,2022</td>
//               </tr>
//               <tr>
//                 <td>1</td>
//                 <td>2</td>
//                 <td>hoihd</td>
//                 <td>2odin</td>
//                 <td>1</td>
//                 <td>2</td>
//                 <td>hoihd</td>
//                 <td>2odin</td>
//                 <td>1</td>
//                 <td>2</td>
//                 <td>hoihd</td>
//                 <td>2odin</td>
//                 <td>2odin</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="table-btns">
//             <div className="dlt-main">
//               <div>
//                 <RiDeleteBin6Fill className="table-btn1" />
//               </div>
//               <p className="dlt_text">Delete</p>
//             </div>
//             <button className="table-btn2">Save</button>
//             <button className="table-btn3">Save and submit for approval</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Link1;

// import React from "react";
// import "./link.css";

// const Link1 = () => {
//   return (
//     <div className="container">
//       <a href="https://usecheck.com/" className="btn-shine" target="_blank">
//         Get early access
//       </a>
//     </div>
//   );
// };

// export default Link1;
