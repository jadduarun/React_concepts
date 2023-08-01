import "./App.css";
import Navbar from "./Navbar";
import ContentPage from "./contentPage";

function App() {
  return (
    <div className="app">
      <div className="inside">
        <Navbar />
        <hr />
        <ContentPage />
      </div>
    </div>
  );
}

export default App;
