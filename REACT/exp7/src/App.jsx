function App() {

  let name = "CSE 16";
  let year = 2026;
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p style = {{ color: 'blue', fontWeight: 'bold' }}>This is a simple React app.</p>
      <p>2*2 = {2 * 2}</p>
      <p>My section is: {name} and my batch is: {year}</p>
               
    </div>
  );
}

  export default App;