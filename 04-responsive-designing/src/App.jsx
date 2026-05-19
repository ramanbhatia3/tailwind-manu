import { useState } from "react";
import Responsive from "./components/Responsive";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <Responsive />
      </div>
    </div>
  );
}

export default App;
