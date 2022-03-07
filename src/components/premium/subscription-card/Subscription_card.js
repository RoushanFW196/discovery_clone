import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import "./subscription_card.css";

function Subscription_card(props) {
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
    <div className="premium_subscription_card">
      <div>
        <h4 id="premium-btn-h4">{props.subscriptionTitle}</h4>
      </div>
      <div>
        <p>{props.subscriptionDesc} <b>{props.subscriptionExtra}</b></p>
      </div>
      <div>
        <button id="subcription-premium-btn" onClick={(() => {
          handleSubmit()
        })}>Subscribe Now</button>
      </div>
    </div>
  );
}

export default Subscription_card;