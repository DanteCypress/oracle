import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      {/* Body */}
      <div className="app__body"></div>
    </div>
  );
}

export default App;
