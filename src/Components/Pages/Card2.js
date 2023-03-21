import React from "react";
import cards from "./card3.module.css";
import { IoIosSettings } from "react-icons/io";

const Card = () => {
  return (
    <div className={cards.body}>
      <div className={cards.card}>
        <div className={cards.imagecontent}>
          <span className={cards.overlay2}></span>

          <div className={cards.cardimage}>
            <IoIosSettings size={87} />
          </div>
        </div>

        <div className={cards.cardcontent}>
          <h2>Configuration </h2>
          <div className={cards.comp}>
            <ul>
              <li className={cards.list}>Set Location span</li>
              <li className={cards.list}>Table Viewer</li>
              <li className={cards.list}>Config Maintenance</li>
              <li className={cards.list}>Error Handler Report</li>
              <li className={cards.list}>Audit Log</li>
              <li className={cards.list}>Error Configuration</li>
              <li className={cards.list}>Qlik Reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import cd3 from "./card3.module.css";
// import { SlSettings } from "react-icons/sl";

// const Card2 = () => {
//   return (
//     <>
//       <div className={cd3.cont}>
//         <div className={cd3.outerCircle}>
//           <SlSettings
//             size={36}
//             style={{ marginTop: "12px", color: "white", marginLeft: "12px" }}
//           />
//         </div>
//         <div className={cd3.hpcard3}>
//           <div className={cd3.hpTitle3}>
//             <h5>Configuration</h5>
//           </div>
//           <div className={cd3.hpdata}>
//             <li className={cd3.dataLi}>Set Location span </li>
//             <li className={cd3.dataLi}>Table Viewer</li>
//             <li className={cd3.dataLi}>Config Maintenance</li>
//             <li className={cd3.dataLi}>Error Handler Report</li>
//             <li className={cd3.dataLi}>Audit Log</li>
//             <li className={cd3.dataLi}>Error Configuration</li>
//             <li className={cd3.dataLi}>Qlik Reporting</li>
//           </div>
//           <div className={cd3.outerDataImgCon3}>
//             <img
//               className={cd3.outerDataImg}
//               src="https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?w=2000"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card2;

// import React from "react";
// import Card2css from "./card.module.css";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { NavLink } from "react-router-dom";

// const Card2 = () => {
//   return (
//     <div>
//       <div className={Card2css.icon1}>
//         <img
//           className="img22"
//           src="https://thumbs.dreamstime.com/b/group-people-planning-concept-business-plan-office-56275448.jpg"
//           alt=""
//         />
//       </div>
//       <div className={Card2css.card}>
//         <div className={Card2css.icard}>
//           <div className={Card2css.cardcontent}>
//             <div className={Card2css.lists}>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>

//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>

//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card2css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//             </div>
//             <div className={Card2css.cardimagediv}>
//               <img
//                 className={Card2css.cardimage}
//                 src="https://digitaltrix.com.br/wp-content/uploads/2018/05/marketing-digital-1000x600.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card2;
