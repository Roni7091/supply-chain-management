import React, { useState, useEffect } from "react";
import "./navdrop.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// const data = [
//   { id: 0, label: "Go to home page" },
//   { id: 1, label: "Logout" },
// ];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  //   const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="navdropmain">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <FaBars size={20} />
        </div>
        <div className={`dropdown-bdy ${isOpen && "open"}`}>
          <NavLink to={"/"}>
            <div className="dropdown-item"> Back to home</div>
          </NavLink>
          <div className="dropdown-item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

//map function------------------------------------------------->>>
// import React, { useState, useEffect } from "react";
// import "./navdrop.css";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const data = [
//   { id: 0, label: "Go to home page" },
//   { id: 1, label: "Logout" },
// ];

// const Dropdown = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [items, setItem] = useState(data);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const toggleDropdown = () => setOpen(!isOpen);

//   //   const handleItemClick = (id) => {
//   //     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
//   //   };

//   return (
//     <div className="navdropmain">
//       <div className="dropdown">
//         <div className="dropdown-header" onClick={toggleDropdown}>
//           <FaBars size={20} />
//         </div>
//         <div className={`dropdown-bdy ${isOpen && "open"}`}>
//           {items.map((item) => (
//             <div className="dropdown-item" id={item.id}>
//               <NavLink style={{ color: "black" }} to={"/"}>
//                 {item.label}
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState, useEffect } from "react";
// import "./navdrop.css";
// import { FaBars } from "react-icons/fa";

// const data = [
//   { id: 0, label: "Istanbul, TR (AHL)" },
//   { id: 1, label: "Paris, FR (CDG)" },
// ];

// const Dropdown = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [items, setItem] = useState(data);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const toggleDropdown = () => setOpen(!isOpen);

//   const handleItemClick = (id) => {
//     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
//   };

//   return (
//     <div className="navdropmain">
//       <div className="dropdown">
//         <div className="dropdown-header" onClick={toggleDropdown}>
//           {selectedItem ? (
//             items.find((item) => item.id == selectedItem).label
//           ) : (
//             <FaBars size={20} />
//           )}
//         </div>
//         <div className={`dropdown-bdy ${isOpen && "open"}`}>
//           {items.map((item) => (
//             <div
//               className="dropdown-item"
//               onClick={(e) => handleItemClick(e.target.id)}
//               id={item.id}
//             >
//               <span
//                 className={`dropdown-item-dot ${
//                   item.id == selectedItem && "selected"
//                 }`}
//               ></span>
//               {item.label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
