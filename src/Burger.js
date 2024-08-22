const burgerDetails = {
  theme: {
    backgroundColor: "coral",
    border: "double",
    fontSize: "20px",
  },
};
export default function Burger({ burgerJoint = "Any burger place" }) {
  return (
    <div style={burgerDetails.theme}>Enjoy that burger from {burgerJoint}!</div>
  );
}
