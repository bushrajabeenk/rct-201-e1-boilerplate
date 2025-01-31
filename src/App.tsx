import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      {/* Clock */}
      <Clock label="24 hour Clock" hours={0o0} minutes={0o0} seconds={0o0} />

      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
      <List1 label="List1" initalValues={[1, 2, 3]} />
      <List2 label="List2" initalValues={[4, 5]} />
    </div>
  );
}

export default App;
