import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="hero">
        <ul className="navbar-list">
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">generative-art</a>
          </li>
          <li>
            <a href="#">writing</a>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <p style={{ color: "white", fontSize: 22 }}>My portfoliooo</p>
      </div>
    </div>
  );
}

export default App;
