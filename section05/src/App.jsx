import "./App.css";
import Header from "./conponents/Header";
import Main from "./conponents/Main";
import Footer from "./conponents/Footer";
import Button from "./conponents/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
