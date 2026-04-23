import React from 'react';
import './App.css';
import Letter from "./components/Letter/Letter";

function App() {
  return (
    <div className="App">
      <Letter status={"pending"} letter={"A"} index={0} total={3}/>
      <Letter status={"resolved"} letter={"B"} index={1} total={3}/>
      <Letter status={"failed"} letter={"C"} index={2} total={3}/>
    </div>
  );
}

export default App;
