import React from "react";
import "./discovery_grid.css";

function Grid_compo(props) {
  return (
        <div>
          <div className="container">
            <img className="image-margin" src={props.src1} alt="" />
            <div className="centered img-card-margin-bottom">
              <p className="premium_grid_pTag">{props.pTag1}</p>
              <p className="premium_grid_pTag_hidden">{props.pTag_hidden1}</p>
            </div>
          </div>
          <div className="container">
            <img className="image-margin2" src={props.src2} alt="" />
            <div className="centered img-card-margin-bottom-in-minus">
              <p className="premium_grid_pTag">{props.pTag2} </p>
              <p className="premium_grid_pTag_hidden">{props.pTag_hidden2}</p>
          </div>
            </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Grid_compo;
