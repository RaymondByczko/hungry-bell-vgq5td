import MyButton from "./MyButton";
const panelMyButtonDetails = {
  theme: {
    backgroundColor: "aqua",
    border: "double",
  },
};
export default function PanelMyButton() {
  return (
    <div style={panelMyButtonDetails.theme}>
      <MyButton butText="FirstButton"></MyButton>
      <MyButton butText="SecondButton"></MyButton>
    </div>
  );
}
