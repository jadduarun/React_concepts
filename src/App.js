import "./App.css";
import Navbar from "./Navbar";
import ContentPage from "./contentPage";
import API from "./API";

function App() {
  return (
    <div className="app">
      <div className="inside">
        <Navbar />
        <hr />
        <ContentPage />
        <hr />
      </div>
    </div>
  );
}

export default App;
