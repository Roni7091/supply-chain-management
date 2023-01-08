import React from "react";
import home2 from "./home2.module.css";

export const trainerCard = () => {
  return (
    <>
      <div className={home2.cards}></div>
    </>
  );
};

const Home2 = () => {
  return (
    <>
      <div className={home2.main}>
        <trainerCard />
      </div>
    </>
  );
};

export default Home2;
