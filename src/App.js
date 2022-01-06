// Components
import { Counter, Hello, Toggler, Search } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="section">{Hello}</div>
      <div className="section">
        <Counter />
      </div>
      <div className="section">
        <Search />
      </div>
      <div className="section">
        <Toggler />
      </div>
    </div>
  );
}

export default App;
