import React from "react";
import cards from "./card3.module.css";
import { AiFillDropboxCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className={cards.body}>
      <div className={cards.card}>
        <div className={cards.imagecontent}>
          <span className={cards.overlay1}></span>

          <div className={cards.cardimage}>
            <AiFillDropboxCircle size={87} />
          </div>
        </div>

        <div className={cards.cardcontent}>
          <h2>Product Transformation </h2>
          <div className={cards.comp}>
            <ul>
              <NavLink to={"/huticket"}>
                <li className={cards.list}>Work Order Execution</li>
              </NavLink>
              <NavLink to={"/userrptg"}>
                <li className={cards.list}>User Reporting</li>
              </NavLink>
              <NavLink to={"/dworder"}>
                <li className={cards.list}>Display TO / Work Order </li>
              </NavLink>
              <NavLink to={"/task2"}>
                <li className={cards.list}>Create Transformation Order</li>
              </NavLink>
              <li className={cards.list}>Cancel TO / Workorder</li>
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
// import { AiOutlineDropbox } from "react-icons/ai";
// import { NavLink } from "react-router-dom";

// const Card1 = () => {
//   return (
//     <>
//       <div className={cd3.cont}>
//         <div className={cd3.outerCircle}>
//           <AiOutlineDropbox
//             size={36}
//             style={{ marginTop: "12px", color: "white", marginLeft: "12px" }}
//           />
//         </div>
//         <div className={cd3.hpcard3}>
//           <div className={cd3.hpTitle2}>
//             <h5>Product Transformation</h5>
//           </div>
//           <div className={cd3.hpdata}>
//             <NavLink to={"/huticket"}>
//               <li className={cd3.dataLi}>Work Order Execution</li>
//             </NavLink>

//             <NavLink to={"/userrptg"}>
//               <li className={cd3.dataLi}>User Reporting</li>
//             </NavLink>

//             <NavLink to={"/dworder"}>
//               <li className={cd3.dataLi}>Display TO / Work Order</li>
//             </NavLink>

//             <NavLink to={"/task2"}>
//               <li className={cd3.dataLi}>Create Transformation Order</li>
//             </NavLink>

//             <li className={cd3.dataLi}>Cancel TO / Workorder</li>
//           </div>
//           <div className={cd3.outerDataImgCon2}>
//             <img
//               className={cd3.outerDataImg}
//               src="https://us.123rf.com/450wm/rashadashurov/rashadashurov1911/rashadashurov191100067/rashadashurov191100067.jpg?ver=6
//               "
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card1;

// import React from "react";
// import Card3css from "./card.module.css";

// import { BsArrowRightCircleFill } from "react-icons/bs";

// import { NavLink } from "react-router-dom";

// const Card1 = () => {
//   return (
//     <div>
//       <div className={Card3css.icon1}>
//         <img
//           className={Card3css.img22}
//           src="https://image.shutterstock.com/image-photo/image-260nw-693989875.jpg"
//           alt=""
//         />
//       </div>
//       <div className={Card3css.card}>
//         <div className={Card3css.icard}>
//           <div className={Card3css.cardcontent}>
//             <div className={Card3css.lists}>
//               <NavLink to={"/huticket"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1 test</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/userrptg"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>User Reporting</h6>
//                 </p>
//               </NavLink>

//               <NavLink to={"/dworder"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>DisplayTo/WorkOrder</h6>
//                 </p>
//               </NavLink>

//               <NavLink to={"/task2"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>CreatTransformationOrder</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/home2"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>Home2</h6>
//                 </p>
//               </NavLink>
//               <NavLink to={"/link1"}>
//                 <p>
//                   <span className={Card3css.iconarrow}>
//                     <BsArrowRightCircleFill />
//                   </span>
//                   <h6>link1</h6>
//                 </p>
//               </NavLink>
//             </div>
//             <div className={Card3css.iconarrow}>
//               <img
//                 className={Card3css.card1image}
//                 src="https://cocosolution.com/cms/uploads/1657204741-o_1fj38p0rk1m0oc6fjbpfda4k1a.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card1;
