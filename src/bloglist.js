import React from "react";

const Bloglist = ({ data, className }) => {
  return (
    <div>
      {data.map(function (item) {
        return (
          <div className={className}>
            {Object.entries(item).map((item) => {
              switch (item[0]) {
                case "title":
                  return <h1>{item[1]}</h1>;
                case "author":
                  return <p>{item[1]}</p>;
              }
            })}
            {/* <h2>{item.title}</h2>
            <p>Written by {item.author}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
