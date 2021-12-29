import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [nextColor, setNextColor] = useState("blue");
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div>
      <button
        disabled={isCheck}
        onClick={() => {
          setButtonColor(buttonColor === "red" ? "blue" : "red");
          setNextColor(nextColor === "blue" ? "red" : "blue");
        }}
        style={{
          backgroundColor: buttonColor,
          marginTop: "30px",
          marginLeft: "650px",
        }}
      >
        Change to {nextColor}
      </button>
      <input onChange={(e) => setIsCheck(e.target.checked)} type="checkbox" />
    </div>
  );
}

export default App;
