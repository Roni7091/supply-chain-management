import React from "react";
import navfile from "./navbar2.module.css";

import { NavLink } from "react-router-dom";
import NavbarDrop from "../Pages/NavbarDrop";

const Navbar21 = ({ name }) => {
  return (
    <>
      <div className={navfile.Container}>
        <nav className={navfile.navtop}>
          <div className={navfile.dropdown}>
            <NavbarDrop />
          </div>
          <div className={navfile.txt}>
            <h3>{name}</h3>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar21;

// import React from "react";
// import navfile from "./navbar2.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

// const Navbar21 = ({ name }) => {
//   const Menus = ["profile", "your apps", "settings"];
//   return (
//     <>
//       <div className={navfile.Container}>
//         <nav className={navfile.navtop}>
//           <div className={navfile.dropdown}>
//             <GiHamburgerMenu size={20} style={{ color: "white" }} />
//             <div className={navfile.dritems}>
//               <ul>
//                 {Menus.map((menu) => (
//                   <li key={menu}>{menu}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className={navfile.txt}>
//             <h3>{name}</h3>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar21;

//original
// import React from "react";
// import navfile from "./navbar2.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

// const Navbar21 = ({ name }) => {
//   return (
//     <>
//       <div className={navfile.Container}>
//         <nav className={navfile.navtop}>
//           <div className={navfile.dropdown}>
//             <NavLink to={"/"}>
//               <GiHamburgerMenu size={20} style={{ color: "white" }} />
//             </NavLink>
//           </div>
//           <div className={navfile.txt}>
//             <h3>{name}</h3>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar21;
