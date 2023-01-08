import React, { useState } from "react";
import Hue from "./hualert.module.css";
import Work from "./Work";

const Hualert = () => {
  const [ticket, setticket] = useState(false);

  const handleTicket = (e) => {
    e.preventDefault();
    setticket(!ticket);
  };

  return (
    <>
      <div className={Hue.sahupopup}>
        <div className={Hue.sahuchild}>
          <div className={Hue.aaasn}>
            <h1>Select HU Number / Pick Order</h1>
          </div>
          <div className={Hue.qwesn}>
            <input
              type="radio"
              id="rd1"
              name="Number"
              value="HU Number"
              Style="height:20px; width:20px; vertical-align: middle;"
            />
            HU Number
            <input
              type="radio"
              id="rd2"
              name="order"
              value="Pick Order"
              Style="height:20px; width:20px; vertical-align: middle;"
              onClick={handleTicket}
            />
            Pick Order
          </div>
        </div>
        {ticket ? (
          <div className={Hue.workmain}>
            {" "}
            <Work />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Hualert;
