import { useState } from "react";
export default function MyButtonChild({ butText, myStyle, onClickChild }) {
  // const [myStyle, setMyStyle] = useState("GreenPlanet");
  return (
    <button
      className={myStyle}
      onClick={onClickChild}
      /*onClick={() => {
        if (myStyle == "GreenPlanet") {
          setMyStyle("HotPlanet");
        } else {
          setMyStyle("GreenPlanet");
        }
      }} */
    >
      {butText}
    </button>
  );
}
