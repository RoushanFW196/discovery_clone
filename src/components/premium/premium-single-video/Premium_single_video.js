import React from "react";
import "./premium_single_video.css";
import VideoPlayer from "react-video-js-player";
import MyVideo from "./myV.mp4";
import Table from "./tableImage.PNG";
import Bold_row from "./boldRow.PNG";
import Subscription_card from "../subscription-card/Subscription_card.js";
import Premium_qoutes_card from "../qoutes_card/Premium_qoutes_card.js";

function Premium_single_video() {
  const videoSrc = MyVideo;
  const poster =
    "https://ap2-prod-images.disco-api.com/2021/12/06/249df7c5-ffec-3054-b6dc-863e730c4696.jpeg?bf=0&f=jpg&p=true&q=85&w=1300";
  return (
    <div>
      <h2 className="single-video-heading single-videoHead">
        Get Access To discovery+ Exclusive Originals
      </h2>

      <VideoPlayer
        className="set-videoPlayer"
        src={videoSrc}
        poster={poster}
        width={1225}
      />
      <h2 className="single-video-heading single-videoHead2">
        Stream on your preferred devices from Android, iOS to Amazon Fire Stick
        and Android TV, Samsung TV and LG TV
      </h2>
      <img
        src="https://ap2-prod-images.disco-api.com/2021/12/21/247d5db3-309d-44c3-8a70-8479dea55cb4.jpg?bf=0&f=jpg&p=true&q=85&w=1400"
        alt=""
      />
      <h2 className="single-video-heading single-videoHead3">
        A Safe Place for Kids Entertainment and Learning
      </h2>
      <img
        src="https://ap2-prod-images.disco-api.com/2021/12/21/bf797987-4983-4820-94af-f06dfe5ed493.jpg?bf=0&f=jpg&p=true&q=85&w=1400"
        alt=""
      />
      <h2 className="single-video-heading">Exclusive Premium Benefits</h2>
      <img className="premium-table" src={Table} alt="" />
      <div className="set-premium-subscription-card"> 
        <Subscription_card
          title="&#8377;199/month"
          desc="Unlimited access to the greatest real-life entertainment plus exclusives and originals"
        />
        <Subscription_card
          title="&#8377;399/year"
          desc="Unlimited access to all that the monthly plan has to offer with"
          extra="₹1000 in savings"
        />
      </div>
      <img src={Bold_row} alt="" />
      <div className="premium_qoutes_card_flex_set">
        <div>
          <Premium_qoutes_card
            title="Very reasonable subscription rate and great content."
            ratting_name="Swara"
            stars="★★★★★"
          />
        </div>
        <div>
          <Premium_qoutes_card
            title="I don't usually rate an app, but this one deserve 5stars. The variety of shows they have is absolutely amazing, no regrets."
            ratting_name="Vaishakh Singh"
            stars="★★★★★"
          />
        </div>
        <div>
          <Premium_qoutes_card
            title="Looking at the content offered, I immediately subscribed to the annual plan and am loving each and every content! I’m hooked on to the"
            ratting_name="Rohit Iyer"
            stars="★★★★"
            extra="★"
          />
        </div>
      </div>
    </div>
  );
}

export default Premium_single_video;
