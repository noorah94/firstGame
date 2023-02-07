import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Lose() {
  const [colorWin, setColorWin] = useState("n1");
  const navigate = useNavigate();

  useEffect(() => {
    const b = setTimeout(() => {
      clearTimeout(b);
      navigate("/");
    }, 3000);
  }, []); //to do the change card place with every refresh of page
  useEffect(() => {
    const a = setInterval(() => {
      if (colorWin === "n1") setColorWin("n2");
      else setColorWin("n1");
      clearInterval(a);
    }, 100);
  });

  return (
    <div className="mainInWinPage">
      <div className="winWord">
        <h1 className={colorWin}>You Lost</h1>
      </div>
      <div className="containerInWin">
        <img
          src="https://c.tenor.com/tp268nPETE8AAAAi/milk-and-mocha-cute.gif"
          alt="card"
        />
        <img
          src="https://i.pinimg.com/originals/86/5f/1c/865f1c977c2083c42cda7c223f72ea76.gif"
          alt="card"
        />
        <img
          src="https://1.bp.blogspot.com/-LpXyeKAZ5SE/W7LTbUYWlhI/AAAAAAAML8c/S7sOl7PG3cQ6l6lEy8oLh3YOcZxXEUT9gCLcBGAs/s1600/AS0004469_17.gif"
          alt="card"
        />
      </div>
    </div>
  );
}
