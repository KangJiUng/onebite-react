import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  // let light = "OFF"; 로 일반 변수를 사용하면 리렌더링 되지 않음

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          전구 {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
