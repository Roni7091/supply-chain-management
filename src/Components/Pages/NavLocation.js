import React, { useState, useEffect } from "react";
import "./navlocation.css";

import { NavLink } from "react-router-dom";

// const data = [
//   { id: 0, label: "Go to home page" },
//   { id: 1, label: "Logout" },
// ];

const NavLocation = () => {
  const [isOpen, setOpen] = useState(false);
  //   const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="locationdropmain">
      <div className="locationdropdown">
        <div className="locationdropdown-header" onClick={toggleDropdown}>
          <h4>SetLocation</h4>
        </div>
        <div className={`locationdropdown-bdy ${isOpen && "open"}`}>
          <NavLink to={"/"}>
            <div className="locationdropdown-item"> Global</div>
          </NavLink>
          <div className="locationdropdown-item">Courcelles, Belgium</div>
          <div className="locationdropdown-item">Selzach, SwitzerLand</div>
        </div>
      </div>
    </div>
  );
};

export default NavLocation;
