import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Win() {
  const [colorWin, setColorWin] = useState("n1");
  const navigate = useNavigate();

  useEffect(() => {
    const b = setTimeout(() => {
      clearTimeout(b);
      navigate("/");
    }, 5000);
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
        <h1 className={colorWin}>You Win</h1>
      </div>
      <div className="containerInWin">
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-137.gif"
          alt="card"
        />
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-134.gif"
          alt="card"
        />
        {/* <img
          src=""
          alt="card"
        /> */}
      </div>
    </div>
  );
}
