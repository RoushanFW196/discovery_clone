import React from "react";
import "./premium.css";
import percent from "./percent.png";
import Discovery_grid from "./grid/Discovery_grid"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function premium() {
  const {user} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(user){
        navigate("../payment")
    }else{
        navigate("../login")
    }
}
  return (
   <>
    <div className="premium-box">
      <div className="premium-content">
        <img className="premium-discovery-img"
          src="https://www.discoveryplus.in/2f01db6ab8a816734682c2c805df1779.png"
          alt=""
        />
        <h1 className="premium-discovery-img">
          Experience Real Life Entertainment Like Never Before with 40+ Genres
          On Discovery Plus.
        </h1>
        <div className="premium-subscription">
          <div>
            <div>
              <p>Monthly</p>
              <p> &#8377;199.00</p>
            </div>
          </div>
          <div>
            <div>
              <p className="recommended">
                <b>RECOMMENDED</b>
              </p>
              <p>Annual</p>
              <p> &#8377;399.00</p>
            </div>
          </div>
        </div>

        <div className="apply-div">
          <img src={percent} alt="" />
          <p>Apply Voucher</p>
        </div>

        <div className="subscribe-div">
          {/* <p><Link className="subcription-premium-aTag" to="../payment">Subscribe Now</Link></p> */}
          <p onClick={(() => {
            handleSubmit()
          })}>Subscribe Now</p>
        </div>
      </div>
    </div>
    <Discovery_grid/>

    <Footer/>
   </>
  );
}

export default premium;

// export const Premium = () => {
//     return <div>
//         {/* <Navbar /> */}
//         <h1>premium</h1>
//         <div className="premium-box">
//             <div className="premium-content">
//                 <img
//                     src="https://www.discoveryplus.in/2f01db6ab8a816734682c2c805df1779.png"
//                     alt=""
//                 />
//                 <h1>
//                     Experience Real Life Entertainment Like Never Before with 40+ Genres
//                     On Discovery Plus.
//                 </h1>
//                 <div className="premium-subscription">
//                     <div>
//                         <div>
//                             <p>Monthly</p>
//                             <p> &#8377;199.00</p>
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             <p className="recommended">
//                                 <b>RECOMMENDED</b>
//                             </p>
//                             <p>Annual</p>
//                             <p> &#8377;399.00</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="apply-div">
//                     <img src={percent} alt="" />
//                     <p>Apply Voucher</p>
//                 </div>
//                 <div className="subscribe-div">
//                     <p>Subscribe Now</p>
//                 </div>
//             </div>
//         </div>
//         <Discovery_grid/>
//     </div>
// }