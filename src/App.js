import "./styles.css";
import Gallery from "./Gallery";
import Time from "./Time";
import Planet from "./Planet";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Gallery></Gallery>
      <Time timeObject={{ h: 12, m: 11 }}></Time>
      <Time></Time>
      <Planet PlanetDetails={{ name: "Mercury", diameter: 4800 }}></Planet>
      <Planet PlanetDetails={{ name: "Venus", diameter: 12000 }}></Planet>
    </div>
  );
}
