import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [colorSettings, setColorSettings] = useState({
    primary: "#000000",
    secondary: "#00b2ff",
  });

  const changeColor = (colorHex, primaryOrSecondary) => {
    let newSettings;

    if (primaryOrSecondary === "primary") {
      newSettings = {
        ...colorSettings,
        primary: colorHex,
      };
    } else {
      newSettings = {
        ...colorSettings,
        secondary: colorHex,
      };
    }

    setColorSettings(newSettings);
  };

  return (
    <div id="App">
      <Header colorSettings={colorSettings} changeColor={changeColor} />
      <Main colorSettings={colorSettings} />
      <p className="printInfo notPrinted" style={{marginTop: "20px"}}>
        * Make sure to enable background graphics / images and remove Header /
        Footer in your print setting.
      </p>
    </div>
  );
}

export default App;
