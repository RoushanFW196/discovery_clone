import React from "react";
import "./subscription_card.css";

function Subscription_card(props) {
  return (
    <div className="premium_subscription_card">
      <div>
        <h4>{props.title}</h4>
      </div>
      <div>
        <p>{props.desc} <b>{props.extra}</b></p>
      </div>
      <div>
        <button>Subscribe Now</button>
      </div>
    </div>
  );
}

export default Subscription_card;
