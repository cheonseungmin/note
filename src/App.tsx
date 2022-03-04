import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const postRequest = () => {
    const dateCheck = new Date();
    axios.post("postUrl", {
      dateCheck,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          postRequest();
        }}
      >
        post request
      </button>
    </div>
  );
}

export default App;
