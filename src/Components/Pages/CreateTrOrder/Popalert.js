import React from "react";

const Popalert = ({ toogle, setToogle }) => {
  const toogleHandler = () => {
    setToogle(!toogle);
  };

  return (
    <div className="top">
      <div></div>
      <div style={{ color: "bisque" }}>
        Work Order Has Been Created Successfully
      </div>
      <div>{toogle ? <button onClick={toogleHandler}>X</button> : null}</div>
    </div>
  );
};

export default Popalert;
