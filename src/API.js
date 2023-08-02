import React from "react";
import { useState } from "react";

function API() {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setData(json));
  return (
    <div>
      <ul>
        {data.map((val) => {
          return (
            <li>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default API;
