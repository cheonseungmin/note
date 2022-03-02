import React, { useState } from "react";
import "./App.css";
import Comps, { CompTypes } from "./Comps";

function App() {
  const [compName, setCompName] = useState<CompTypes>("Comp1");
  const changeComp = () => {
    setCompName(compName === "Comp1" ? "Comp2" : "Comp1");
  };

  return (
    <div>
      <button
        onClick={() => {
          changeComp();
        }}
      >
        Comp change
      </button>
      {Comps[compName]()}
    </div>
  );
}

export default App;
