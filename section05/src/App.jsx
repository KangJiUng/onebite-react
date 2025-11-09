import "./App.css";
import Header from "./conponents/Header";
import Main from "./conponents/Main";
import Footer from "./conponents/Footer";

function App() {
  return (
    <>
      <Header /> {/* 자식 컴포넌트 */}
      <Main />
      <h1>안녕 리액트</h1> {/* 부모 컴포넌트(최상위) -> root 컴포넌트 */}
      <Footer />
    </>
  );
}

export default App;
