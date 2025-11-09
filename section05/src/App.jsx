import "./App.css";
import Bulb from "./conponents/Bulb";
import Counter from "./conponents/Counter";

function App() {
  return (
    <>
      <Bulb />

      <Counter />
    </>
  );
}

export default App;

// ---------------------------------------
// import "./App.css";
// import { useState } from "react";

// const Bulb = () => {
//   const [light, setLight] = useState("OFF");

//   return (
//     <div>
//       {light === "ON" ? (
//         <h1 style={{ backgroundColor: "orange" }}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
//       )}
//       <button
//         onClick={() => {
//           setLight(light === "ON" ? "OFF" : "ON");
//         }}
//       >
//         전구 {light === "ON" ? "끄기" : "켜기"}
//       </button>
//     </div>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// function App() {
//   const [light, setLight] = useState("OFF");
//   // let light = "OFF"; 로 일반 변수를 사용하면 리렌더링 되지 않음

//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;
