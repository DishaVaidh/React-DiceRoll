import React from "react";
import woman from "../../assets/woman.png";
import "./Participant.css";
export default function Participant2({ stepsLeft }) {
  return (
    <div className="participant-container">
      <div className="participant2">
        <img className="profile-img" src={woman} alt="Logo" />
        <div className="name-score">
          <div id="center" className="text-style">
            Ansi Singh
          </div>
          <div className="text-score">{50 - stepsLeft}</div>
        </div>
      </div>
    </div>
  );
}
