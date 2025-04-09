import "./styles.css";
import Greeting from "./Greeting.js";
import Button from "./Button.js";
import Counter from "./state.js";
import Counting from "./counter.js";
import Getter from "./hookeff.js";
import Refer from "./hookref.js";
import ButtonClick from "./EventClick.js"
import LoginToggle from "./Conditional.js"
import UsingFetch from "./inbuilt.js"

export default function App() {
  return (
    <div className="App">
      <Button />
      <Greeting name="Madhavan" />
      <Greeting name="Maddy" />
      <Button />
      <Counter />
      <Counting />
      <Getter />
      <Refer />
      <ButtonClick/>
      <LoginToggle />
      <UsingFetch />
    </div>
  );
}
