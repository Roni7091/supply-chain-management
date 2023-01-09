// import React from "react";
// import display from "./work.module.css";

// const Work = () => {
//   return (
//     <div className={display.numeric}>
//       <div className={display.first}>
//         <h3>WO1789</h3>
//       </div>
//       <div className={display.sectop}>
//         <div className={display.sectop1}>
//           <h5>Transform Order Number #</h5>
//           <p1>TO1360</p1>
//         </div>
//         <div className={display.sectop2}>
//           <h5>Transform Order Item#</h5>
//           <p1 style={{ color: "green" }}>1</p1>
//         </div>
//         <div className={display.sectop3}>
//           <h5>Product Code</h5>
//           <p1>242436-12</p1>
//         </div>
//         <div className={display.sectop4}>
//           <h5>Product Description</h5>
//           <p1>COUPLER AC ZOOM</p1>
//         </div>
//         <div className={display.sectop5}>
//           <h5>Batch</h5>
//           <p1>BATCHHH</p1>
//         </div>
//       </div>
//       <div className={display.sectopp}>
//         <div className={display.sectop6}>
//           <h5>Quantity</h5>
//           <p1>1</p1>
//         </div>
//         <div className={display.sectop7}>
//           <h5>UOM</h5>
//           <p1>EA</p1>
//         </div>
//         <div className={display.sectop8}>
//           <h5>HU Number</h5>
//           <p1>HD19122022_01</p1>
//         </div>
//         <div className={display.sectop9}>
//           <h5>Pick Order</h5>
//           <p1></p1>
//         </div>
//         <div className={display.sectop10}>
//           <h5>Pick Order Item</h5>
//           <p1></p1>
//         </div>
//       </div>
//       <div className={display.second}>
//         <h3>BOM Components</h3>
//       </div>
//       <div className={display.sectopp1}>
//         <div className={display.sectop11}>
//           <h5>Component Type</h5>
//         </div>
//         <div className={display.sectop12}>
//           <h5>Component</h5>
//         </div>
//         <div className={display.sectop13}>
//           <h5>Component Quantity</h5>
//         </div>
//         <div className={display.sectop14}>
//           <h5>UOM</h5>
//         </div>
//       </div>
//       <div className={display.sectopp2}>
//         <div>
//           <p1>Cable</p1>
//         </div>
//         <div>
//           <p1>CCN1010</p1>
//         </div>
//         <div>
//           <p1>1</p1>
//         </div>
//         <div>
//           <p1>EA</p1>
//         </div>
//       </div>
//       <br />
//       <div className={display.sectopp3}>
//         <div>
//           <p1>IFU</p1>
//         </div>
//         <div>
//           <p1>CCN101022</p1>
//         </div>
//         <div>
//           <p1>1</p1>
//         </div>
//         <div>
//           <p1>EA</p1>
//         </div>
//       </div>
//       <div className={display.back}>
//         <button className={display.backbut}>BACK</button>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React from "react";
import Navbar21 from "../Navbar21";
import display from "./work.module.css";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className={display.numeric}>
      <div className={display.first}>
        <h4>WO1789</h4>
      </div>
      <div className={display.sectop}>
        <div className={display.sectop1}>
          <h5>Transform Order Number #</h5>
          <p1>TO1360</p1>
        </div>
        <div className={display.sectop2}>
          <h5>Transform Order Item#</h5>
          <p1 style={{ color: "green" }}>1</p1>
        </div>
        <div className={display.sectop3}>
          <h5>Product Code</h5>
          <p1>242436-12</p1>
        </div>
        <div className={display.sectop4}>
          <h5>Product Description</h5>
          <p1>COUPLER AC ZOOM</p1>
        </div>
        <div className={display.sectop5}>
          <h5>Batch</h5>
          <p1>BATCHHH</p1>
        </div>
      </div>
      <div className={display.sectopp}>
        <div className={display.sectop6}>
          <h5>Quantity</h5>
          <p1>1</p1>
        </div>
        <div className={display.sectop7}>
          <h5>UOM</h5>
          <p1>EA</p1>
        </div>
        <div className={display.sectop8}>
          <h5>HU Number</h5>
          <p1>HD19122022_01</p1>
        </div>
        <div className={display.sectop9}>
          <h5>Pick Order</h5>
          <p1></p1>
        </div>
        <div className={display.sectop10}>
          <h5>Pick Order Item</h5>
          <p1></p1>
        </div>
      </div>
      <div className={display.second}>
        <h4>BOM Components</h4>
      </div>
      <div className={display.sectopp1}>
        <div className={display.sectop11}>
          <h5>Component Type</h5>
        </div>
        <div className={display.sectop12}>
          <h5>Component</h5>
        </div>
        <div className={display.sectop13}>
          <h5>Component Quantity</h5>
        </div>
        <div className={display.sectop14}>
          <h5>UOM</h5>
        </div>
      </div>
      <div className={display.sectopp2}>
        <div>
          <p1>Cable</p1>
        </div>
        <div>
          <p1>CCN1010</p1>
        </div>
        <div>
          <p1>1</p1>
        </div>
        <div>
          <p1>EA</p1>
        </div>
      </div>
      <br />
      <div className={display.sectopp3}>
        <div>
          <p1>IFU</p1>
        </div>
        <div>
          <p1>CCN101022</p1>
        </div>
        <div>
          <p1>1</p1>
        </div>
        <div>
          <p1>EA</p1>
        </div>
      </div>
      <NavLink to={"/"}>
        <div className={display.back}>
          <button className={display.backbut}>BACK</button>
        </div>
      </NavLink>
    </div>
  );
};

export default Work;
