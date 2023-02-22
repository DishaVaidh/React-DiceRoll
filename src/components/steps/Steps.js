import React from "react";
import "./Steps.css";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import flag from "../../assets/flag.png";
import loc from "../../assets/loc1.png";
export default function Steps({
  amanSteps,
  ansiSteps,
  percentToMoveAman,
  percentToMoveAnsi,
}) {
  return (
    <div>
      <div className="step">
        <div className="step1">
          <img className="loc-img " src={loc} alt="Logo" />
          <img
            style={{
              position: "relative",
              left: `${percentToMoveAman}%`,
            }}
            className="profile-img "
            src={man}
            alt="Logo"
          />
          <img className="flag-img " src={flag} alt="Logo" />
        </div>
      </div>
      <div className="steps-left-label">{amanSteps} steps left</div>
      <br />
      <br />
      <div className="step">
        <div className="step1">
          <img className="loc-img " src={loc} alt="Logo" />
          <img
            style={{
              position: "relative",
              left: `${percentToMoveAnsi}%`,
            }}
            className="profile-img"
            src={woman}
            alt="Logo"
          />
          <img className="flag-img " src={flag} alt="Logo" />
        </div>
      </div>
      <div className="steps-left-label">{ansiSteps} steps left</div>
    </div>
  );
}
