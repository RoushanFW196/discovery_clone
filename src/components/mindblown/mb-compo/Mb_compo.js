import React from "react";
import "./mb_compo.css";

function Mb_compo(props) {
  return (
      <div
      className="mindblown-compo"
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    >
      <div className="mindblown-compo-text">
      <h4 className="compo-text-h4">{props.title}</h4>
      <p className="compo-text-p">{props.title_hidden}</p>
      </div>
    </div>
  );
}

export default Mb_compo;
