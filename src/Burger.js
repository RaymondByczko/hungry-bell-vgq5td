const burgerDetails = {
  theme: {
    backgroundColor: "coral",
    border: "double",
  },
};
export default function Burger() {
  return <div style={burgerDetails.theme}>Enjoy that burger!</div>;
}
