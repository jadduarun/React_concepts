import React, { useState } from "react";
import Bloglist from "./bloglist";

const ContentPage = (props) => {

  let {data,age}=props;
  let name = "Arun";

  const handleClick = () => {
    console.log("Hi")
    name = "Prajith";
  }
  // const data2 = data.filter(data => data.author === "Author 1");
  // const data3 = data.filter(data => data.author === "Author 2");
  return (
    <div className="content">
      <Bloglist data={data}/>
      {/* <Bloglist className="red" data={data2}/>
      <Bloglist className="blue" data={data3}/> */}
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default ContentPage;
