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
        <li className="table-header">
          <div className="left-col">
            date
          </div>
          <div className="right-col">
            name
          </div>
        </li>
        <li className="piece-details">
          <div className="left-col">
            13/03/23
          </div>
          <div className="right-col">
            {"pulsar (inspired by neon genesis opening)"}
          </div>
        </li>
        <li className="piece-details">
          <div className="left-col">
            07/11/22
          </div>
          <div className="right-col">
            noisy grid
          </div>
        </li>
        <li className="piece-details">
          <div className="left-col">
            03/11/20
          </div>
          <div className="right-col">
            light funnel
          </div>
        </li>
      </div>
    </div>
  );
}

export default App;
