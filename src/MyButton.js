import { useState } from "react";
export default function MyButton({ butText }) {
  const [myStyle, setMyStyle] = useState("GreenPlanet");
  return (
    <button
      className={myStyle}
      onClick={() => {
        if (myStyle == "GreenPlanet") {
          setMyStyle("HotPlanet");
        } else {
          setMyStyle("GreenPlanet");
        }
      }}
    >
      {butText}
    </button>
  );
}
