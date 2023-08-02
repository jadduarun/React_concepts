import React from "react";

const ContentPage = () => {
  const datas = [
    {
      title: "Title 1",
      author: "Author 1",
    },
    {
      title: "Title 2",
      author: "Author 2",
    },
  ];
  return (
    <div className="content">
      {datas.map(function (item) {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContentPage;
