import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="mainInMainPage">
      <div className="choiceDiv">
        <div className="mainPageHeads">
          <h1 className="mainHead"> Memory </h1>
          <h2 className="subHead"> Match-Up </h2>
        </div>
        <div className="mainPageBtns">
          <button
            className="mainBtns"
            onClick={() => {
              navigate("/start");
            }}
          >
            Start Game
          </button>
          <br />
          <button
            className="mainBtns"
            onClick={() => {
              navigate("/instructions");
            }}
          >
            Instructions
          </button>
        </div>
      </div>
    </div>
  );
}

/*

const navigation = useNavigation();
navigation.goBack();


*/
