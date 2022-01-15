import React from "react";

const Annual = () => {
  return (
    <div className="annual">
      <img src={require("./ressources/icon-music.svg").default} alt="music" />
      <div className="plan">
        <p className="annualtext">Annual Plan</p>
        <p className="year">$59.99/year</p>
      </div>
      <p>
        <a href="#" target="_blank" rel="noreferrer" id="link">
          Change
        </a>
      </p>
    </div>
  );
};

export default Annual;
