import React, { useState } from "react";
import { BiHelpCircle, BsInstagram } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import "./navbar.css";
import { NavLink } from "react-router-dom";

import NavbarDropMain from "./Pages/NavbarDropMain";
import NavLocation from "./Pages/NavLocation";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo"></div>
        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <a href="#">WorkOrderExecution</a>
            </li>
            <li>
              <a href="#">Verification</a>
            </li>
            <NavLink to={"/rsc"}>
              <li>
                <a href="#">SC WorkFlow Inbox</a>
              </li>
            </NavLink>
            <li>
              <a href="#">
                <NavLocation />
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavbarDropMain />
              <div className="username-navbar">
                <h3 className="usernamehead">john</h3>
              </div>
            </li>
            <li className="help-center">
              <BiHelpCircle className="youtube" style={{ marginTop: "10px" }} />
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { BiHelpCircle, BsInstagram } from "react-icons/bi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosContact } from "react-icons/io";
// import "./navbar.css";
// import { NavLink } from "react-router-dom";
// import NavbarDrop from "./Pages/NavbarDrop";

// const Navbar = () => {
//   const [showMediaIcon, setShowMediaIcon] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <NavLink to={"/logo"}>
//             <h2>
//               <span>S</span>upply
//               <span>C</span>hain
//               <span>M</span>anagement
//             </h2>
//           </NavLink>
//         </div>
//         <div
//           className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
//         >
//           <ul>
//             <li>
//               <a href="#">WorkOrderExecution</a>
//             </li>
//             <li>
//               <a href="#">Varification</a>
//             </li>
//             <NavLink to={"/rsc"}>
//               <li>
//                 <a href="#">RSC WorkFlowIndex</a>
//               </li>
//             </NavLink>
//             <li>
//               <a href="#">SetLocation</a>
//             </li>
//           </ul>
//         </div>
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <NavbarDrop />
//                 <IoIosContact className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <BiHelpCircle className="youtube" />
//               </a>
//             </li>
//           </ul>
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

//same above
// import React, { useState } from "react";
// import { BsYoutube, BsInstagram } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosContact } from "react-icons/io";
// import "./navbar.css";

// const Navbar = () => {
//   const [showMediaIcon, setShowMediaIcon] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <h2>
//             <span>R</span>ight
//             <span>S</span>tage
//             <span>C</span>ostumization
//           </h2>
//         </div>
//         <div
//           className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
//         >
//           <ul>
//             <li>
//               <a href="#">WorkOrderExecution</a>
//             </li>
//             <li>
//               <a href="#">Varification</a>
//             </li>
//             <li>
//               <a href="#">RSC WorkFlowIndex</a>
//             </li>
//             <li>
//               <a href="#">SetLocation</a>
//             </li>
//           </ul>
//         </div>
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <IoIosContact className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/watch?v=eBKcGAhkZUI&t=8s"
//                 target="_thapa"
//               >
//                 <BsYoutube className="youtube" />
//               </a>
//             </li>
//           </ul>
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>
//       <section className="hero-section">
//         <p>Welcome to</p>
//         <h1>Vishwa page</h1>
//       </section>
//     </>
//   );
// };

// export default Navbar;
