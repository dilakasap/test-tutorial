import { useState } from "react";
import "./App.css";

export const replaceCamelCase = (colorName)=>{
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

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
          backgroundColor: isCheck ? "gray" : buttonColor,
          marginTop: "30px",
          marginLeft: "650px",
        }}
      >
        Change to {nextColor}
      </button>
      <input
        id="disabled-checkbox"
        onChange={(e) => setIsCheck(e.target.checked)}
        type="checkbox"/>
        <label htmlFor="disabled-checkbox">disable button</label>
      
    </div>
  );
}

export default App;
