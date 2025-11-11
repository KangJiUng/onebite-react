import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // 1. 마운트: 탄생
  // 컴포넌트가 마운트 되었을 때만 최초로 한 번 실행시키고 싶은 코드가 있다면 deps를 빈 배열로 두기
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  // 컴포넌트가 업데이트될 때마다 실행시키고 싶은 코드가 있다면 deps를 생략하기
  // 마운트 시점을 제외하고 업데이트가 되는 순간에만 콜백 함수를 실행하고 싶다면
  // 현재 컴퍼넌트가 마운트가 되었는지 안 되었는지를 체크하는 변수를 useRef를 이용해서 하나 만들기
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 죽음

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
