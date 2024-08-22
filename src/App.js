import "./styles.css";
import Gallery from "./Gallery";
import Time from "./Time";
import Planet from "./Planet";
import Burger from "./Burger";
import MyButton from "./MyButton";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Gallery></Gallery>
      <Time timeObject={{ h: 12, m: 11 }}></Time>
      <Time></Time>
      <Planet
        PlanetDetails={{
          name: "Mercury",
          diameter: 4800,
          className: "HotPlanet",
        }}
      ></Planet>
      <Planet
        PlanetDetails={{
          name: "Venus",
          diameter: 12000,
          className: "WarmPlanet",
        }}
      ></Planet>
      <Burger></Burger>
      <Burger burgerJoint="Hungry Jacks"></Burger>
      <MyButton butText="Workhard"></MyButton>
    </div>
  );
}
