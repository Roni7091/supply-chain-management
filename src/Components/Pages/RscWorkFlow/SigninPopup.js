import React from "react";
import "./rscworkflow.css";
import { IoMdContact } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const SigninPopup = ({ signin, setSignin }) => {
  const handleSignIn = (e) => {
    e.preventDefault();
    setSignin(!signin);
  };
  return (
    <>
      <div className="sign-alert">
        <div className="sign-pop">
          <div className="text-focus-in">
            <div className="test1">
              <h1 className="test1-title">Supply Chain Management</h1>
            </div>
            <form className="singin-pop" action="">
              <div>
                <div className="user-icon">
                  <IoMdContact size={20} color={"black"} />
                </div>
                <input className="input-field" type="text" />
              </div>
              <div>
                <div className="user-icon2">
                  <RiLockPasswordFill size={20} color={"black"} />
                </div>
                <input className="input-field" type="password" />
                <br />
                <h1 className="apr-text">I aprove the records</h1>
                <div className="sign-btns">
                  <button className="sign-btn1">CREATE</button>
                  <button onClick={handleSignIn} className="sign-btn2">
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPopup;
