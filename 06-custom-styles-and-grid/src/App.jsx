import { useState } from "react";
import { ModeToggle } from "./components/ModeToggle.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      Hello World
    </div>
  );
}

export default App;
