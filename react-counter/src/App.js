import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 3);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>React Counter Application</h1>
        <h2>{count}</h2>

        <button onClick={increment} style={styles.button}>
          Increment (+)
        </button>

        <button onClick={decrement} style={styles.button}>
          Decrement (-)
        </button>

        <br /><br />

        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },

  card: {
    textAlign: "center",
    padding: "40px",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 10px gray",
  },

  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;