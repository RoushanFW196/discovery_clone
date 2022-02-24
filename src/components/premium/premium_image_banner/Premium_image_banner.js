import React from "react";
import "./premium_image_banner.css";

function Premium_image_banner() {
  return (
    <div>
      {/* <h2 className="secHead">Thousands of Premium Shows</h2> */}
      <div className="image-banner">
        <div className="image-banner-grid">
           <div className="setCenter">
          <div>
           <h3>American Chopper</h3>
            <p>The Teutuls are back and Sr. and Jr. forge ahead with their own shops.</p>
           </div>
          </div>
          <div>
            <img
              src="https://ap2-prod-images.disco-api.com/2020/02/25/358d284c-04bf-4f59-8de1-f4255593775e.jpeg?bf=0&f=jpg&p=true&q=85&w=700"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium_image_banner;
