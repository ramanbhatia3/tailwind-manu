import { useState } from "react";
import { ModeToggle } from "./components/ModeToggle.jsx";
import Grid from "./components/Grid.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-neutral-500" : "bg-white text-black"
      }`}
    >
      <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Grid />
    </div>
  );
}

export default App;
