import "./styles.css";
import Greeting from "./Greeting.js";
import Button from "./Button.js";
import Counter from "./state.js";

export default function App() {
  return (
    <div className="App">
      <Button />
      <Greeting name="Madhavan" />
      <Greeting name="Maddy" />
      <Button />
      <Counter />
    </div>
  );
}
