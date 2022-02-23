import React from "react";
import "./discovery_grid.css";


function Discovery_grid() {
  return (
    <div className="discoveryGrid">
        <h2 className="head">Get It All With discovery+</h2>
      <div className="main">
        <div>
          <div className="container">
            <img
              className="image-margin"
              src="https://ap2-prod-images.disco-api.com/2021/12/21/1ba9e855-0426-462b-bcfd-6667ca51b99b.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom">
              <p>Binge</p>
            </div>
          </div>
          <div className="container">
            <img
              src="https://ap2-prod-images.disco-api.com/2021/12/21/9999c652-3e08-46ce-8b83-d4d7e01c3497.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom-in-minus">
              <p>Browse</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <img
              className="image-margin"
              src="https://ap2-prod-images.disco-api.com/2021/12/21/e3d5f3d0-4acc-4a46-b3bc-646f832b9326.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom">
              <p>Watch</p>
            </div>
          </div>
          <div className="container">
            <img
              src="https://ap2-prod-images.disco-api.com/2021/12/21/a5b80ce1-4659-4977-b5dc-cdbf9c03641c.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom-in-minus">
              <p>Find</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <img
              src="https://ap2-prod-images.disco-api.com/2021/12/21/b8c2ea45-9c74-4005-9f7e-4a8d447a98eb.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom-in-minus">
              <p>Stream</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <img
              className="image-margin"
              src="https://ap2-prod-images.disco-api.com/2022/1/3/3fbd93c4-e18d-4238-ac5f-dab703206b00.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom">
              <p>Enjoy</p>
            </div>
          </div>
          <div className="container">
            <img
              src="https://ap2-prod-images.disco-api.com/2022/1/3/1c6abfca-43d4-49f9-8bce-2310e2e1bb2e.png?bf=0&f=jpg&p=true&q=85&w=312"
              alt=""
            />
            <div className="centered img-card-margin-bottom-in-minus">
              <p>Can't Miss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discovery_grid;
