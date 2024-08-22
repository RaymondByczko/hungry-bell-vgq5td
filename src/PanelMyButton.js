import MyButtonChild from "./MyButtonChild";
import { useState } from "react";
const panelMyButtonDetails = {
  theme: {
    backgroundColor: "aqua",
    border: "double",
  },
};
export default function PanelMyButton() {
  const [myStyle, setMyStyle] = useState("GreenPlanet");
  function setCorrectStyle() {
    if (myStyle == "GreenPlanet") {
      setMyStyle("HotPlanet");
    } else {
      setMyStyle("GreenPlanet");
    }
  }
  return (
    <div style={panelMyButtonDetails.theme}>
      <MyButtonChild
        butText="FirstButton"
        myStyle={myStyle}
        onClickChild={setCorrectStyle}
      ></MyButtonChild>
      <MyButtonChild
        butText="SecondButton"
        myStyle={myStyle}
        onClickChild={setCorrectStyle}
      ></MyButtonChild>
    </div>
  );
}
