import "./styles.css";
import Gallery from "./Gallery";
import Time from "./Time";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Gallery></Gallery>
      <Time timeObject={{ h: 12, m: 11 }}></Time>
    </div>
  );
}
