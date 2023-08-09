import "./App.css";
import Navbar from "./Navbar";
import ContentPage from "./contentPage";
import Garage from "./Garage";
import Stopwatch from "./Stopwatch";
import Toggle from "./Toggle";
import Form from "./Form";

function App() {
  // const datas = [
  //   {
  //     title: "Title 1",
  //     author: "Author 1",
  //   },
  //   {
  //     title: "Title 2",
  //     author: "Author 2",
  //   },
  // ];
  // let age = 21;
  return (
    <div className="app">
      {/* <div className="inside">
        <Navbar />
        <hr />
        <ContentPage data={datas} age ={age}/>
      </div> */}
      {/* <Garage /> */}
      {/* <Stopwatch /> */}
      {/* <Toggle /> */}
      <Form />
    </div>
  );
}

export default App;
