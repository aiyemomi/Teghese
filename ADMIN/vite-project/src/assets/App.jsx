import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Admin/>
    </>
  );
}

export default App;
