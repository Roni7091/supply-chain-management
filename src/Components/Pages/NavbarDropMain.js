import React, { useState, useEffect } from "react";
import "./navbardropmain.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosContact } from "react-icons/io";

// const data = [
//   { id: 0, label: "Go to home page" },
//   { id: 1, label: "Logout" },
// ];

const NavbarDropMain = () => {
  const [isOpen, setOpen] = useState(false);
  //   const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="mainnavdrop">
      <div className="maindropdown">
        <div className="maindropdown-header" onClick={toggleDropdown}>
          <IoIosContact size={30} />
        </div>
        <div className={`maindropdown-bdy ${isOpen && "open"}`}>
          <div className="maindropdown-item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropMain;
