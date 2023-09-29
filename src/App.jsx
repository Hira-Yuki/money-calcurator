import "./App.css";
import Calculator from "./Components/Calculator/Calculator";
import Header from "./Components/Header";

function App() {
  return (
    <div className="container">
      <Header headertext={"세뱃돈 계산기"} />
      <Calculator />
    </div>
  );
}

export default App;
