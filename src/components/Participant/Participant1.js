import React from "react";
import man from "../../assets/man.png";
import "./Participant.css";
export default function Participant1({ stepsLeft }) {
  return (
    <div className="participant-container">
      <div className="participant1">
        <img className="profile-img" src={man} alt="Logo" />
        <div className="name-score">
          <div className="text-style">Aman Singh</div>
          <div className="text-score">{50 - stepsLeft}</div>
        </div>
      </div>
    </div>
  );
}
