import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Hcss from "./home.module.css";

import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <section className={Hcss.maincontainer}>
        <Navbar />
        <div className={Hcss.allcards}>
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </section>
    </>
  );
};

export default Home;

// <section className="hero-section">
// <p>Welcome to</p>
// <h1>Vishwa page</h1>
// </section>
