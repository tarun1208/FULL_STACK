import React, { useState } from "react";
function Message(props) {
  return <h2 style={{ color: "purple" }}>Hello, {props.name}!</h2>;
}
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "blue" }}>ReactJS - Props & State Example</h1>
      <Message name="Manoj" />
      <p style={{ fontSize: "18px" }}>You clicked {count} times</p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default App;
