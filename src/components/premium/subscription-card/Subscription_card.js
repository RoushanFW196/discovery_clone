import React from "react";
import "./subscription_card.css";

function Subscription_card(props) {
  return (
    <div className="premium_subscription_card">
      <div>
        <h4 id="premium-btn-h4">{props.subscriptionTitle}</h4>
      </div>
      <div>
        <p>{props.subscriptionDesc} <b>{props.subscriptionExtra}</b></p>
      </div>
      <div>
        <button id="subcription-premium-btn">Subscribe Now</button>
      </div>
    </div>
  );
}

export default Subscription_card;