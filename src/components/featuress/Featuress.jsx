import React from "react";
import "./featuress.css";

const Featuress = ({ titles, texts }) => (
  <div className="gpt3__features-container__features">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{titles}</h1>
    </div>
    <div className="gpt3__features-container_features-text">
      <p>{texts}</p>
    </div>
  </div>
);

export default Featuress;
