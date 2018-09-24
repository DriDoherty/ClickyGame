import React from "react";
import "./Image.css";

const Image = (props) => (
    <div className="img-container">
      <img
        id={props.id}
        src={props.image}
        onClick={props.callBack.bind(this, props.id)}
      />
    </div>
);

export default Image;