import React, { Component } from "react";
import "./RollDice.css";
import Die from "../Die/Die.js";
import Steps from "../steps/Steps";
import Participant1 from "../Participant/Participant1";
import Participant2 from "../Participant/Participant2";

class RollDice extends Component {
  // Face numbers passes as default props
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
    sidesInNumber: [1, 2, 3, 4, 5, 6],
  };
  constructor(props) {
    super(props);

    // States
    this.state = {
      die: "one",
      rolling: false,
      amanTurn: 1,
      amanSteps: 50,
      ansiSteps: 50,
      buttonName: "Aman's Turn",
      amanOffsetPercent: 0,
      ansiOffsetPercent: 0,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { sides, sidesInNumber } = this.props;
    const {
      amanTurn,
      amanSteps,
      ansiSteps,
      amanOffsetPercent,
      ansiOffsetPercent,
    } = this.state;
    const randomSide = Math.floor(Math.random() * sides.length);
    this.setState({
      // Changing state upon click
      die: sides[randomSide],
      rolling: true,
      buttonName: amanTurn ? "Ansi's Turn" : "Aman's Turn",
      amanSteps:
        amanTurn && amanSteps - sidesInNumber[randomSide] >= 0
          ? amanSteps - sidesInNumber[randomSide]
          : amanSteps,
      ansiSteps:
        !amanTurn && ansiSteps - sidesInNumber[randomSide] >= 0
          ? ansiSteps - sidesInNumber[randomSide]
          : ansiSteps,
      amanOffsetPercent:
        amanTurn && amanSteps - sidesInNumber[randomSide] >= 0
          ? amanOffsetPercent + sidesInNumber[randomSide] * 2
          : amanOffsetPercent,
      ansiOffsetPercent:
        !amanTurn && ansiSteps - sidesInNumber[randomSide] >= 0
          ? ansiOffsetPercent + sidesInNumber[randomSide] * 2
          : ansiOffsetPercent,
    });

    // Start timer of one sec when rolling start
    setTimeout(() => {
      // Set rolling to false again when time over
      this.setState({ rolling: false });
    }, 1000);

    this.setState({ amanTurn: !amanTurn });
  }
  handleClick = (e) => {
    this.inputElement.click();
  };
  render() {
    const handleBtn = this.state.rolling ? "RollDice-rolling" : "";
    const {
      die,
      rolling,
      amanSteps,
      ansiSteps,
      amanOffsetPercent,
      ansiOffsetPercent,
    } = this.state;
    return (
      <div className="RollDice">
        <Steps
          amanSteps={amanSteps}
          ansiSteps={ansiSteps}
          percentToMoveAman={amanOffsetPercent}
          percentToMoveAnsi={ansiOffsetPercent}
        />
        <Participant1 stepsLeft={amanSteps} />
        <div className="dice-button">
          <div className="RollDice-container">
            <div onClick={this.handleClick}>
              <Die face={die} rolling={rolling} />
            </div>
          </div>
          <button
            ref={(input) => (this.inputElement = input)}
            className={handleBtn}
            disabled={
              this.state.rolling ||
              this.state.amanSteps === 0 ||
              this.state.ansiSteps === 0
            }
            onClick={this.roll}
          >
            {this.state.rolling ? "Rolling" : this.state.buttonName}
          </button>
        </div>
        <Participant2 stepsLeft={ansiSteps} />
        {this.state.amanSteps === 0 || this.state.ansiSteps === 0 ? (
          <div className="text-won">
            Congratulations {this.state.amanSteps === 0 && "Aman Singh"}{" "}
            {this.state.ansiSteps === 0 && "Ansi Singh"}! You won the game.
          </div>
        ) : (
          <div className="text-won">
            Click on the button at bottom to roll dice.
          </div>
        )}
      </div>
    );
  }
}

export default RollDice;
