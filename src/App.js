import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [nextColor, setNextColor] = useState("blue");

  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(buttonColor==="red" ? "blue" : "red");
          setNextColor(nextColor==="blue" ? "red" : "blue");
        }}
        style={{ backgroundColor: buttonColor, marginTop:"30px", marginLeft:"650px"}}
      >
        Change to {nextColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;