import React from "react";

import Hcss from "../User/register.module.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className={Hcss.umaincontainer}>
        <div className={Hcss.uinnerc}>
          <h2 className={Hcss.umaintitle}>
            <span>S</span>upply
            <span style={{ marginLeft: "4px" }}>C</span>hain
            <span style={{ marginLeft: "4px" }}>M</span>anagement
          </h2>
        </div>
        <div className={Hcss.loginCard}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Register;
