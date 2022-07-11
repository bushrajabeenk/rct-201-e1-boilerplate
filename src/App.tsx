import React from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      {/* Clock */}
      <Clock hours={0o0} minutes={0o0} seconds={0o0} />
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
