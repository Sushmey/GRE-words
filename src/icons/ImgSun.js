import React from "react";
import iconSun from "./sun.png";
export default function imgSun() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked!");
        }}
        className="transparentButton"
      >
        <img src={iconSun} alt="Dark Mode" className="sun" />
      </button>
    </div>
  );
}
