import Main from "./components/Main";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <div id="App">
      <Header />
      <Main />
      <p className="printInfo notPrinted">
        * Make sure to enable background graphics / images and remove Header /
        Footer in your print setting.
      </p>
    </div>
  );
}

export default App;
