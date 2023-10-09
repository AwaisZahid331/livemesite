import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [modes, setModes] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const clickToggle = () => {
    if (modes === "light") {
      setModes("dark");
      document.body.style.backgroundColor = "red";
    } else {
      setModes("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041938";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        modes={modes}
        clickToggle={clickToggle}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
