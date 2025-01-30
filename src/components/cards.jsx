import React from "react";

const cards = ({ title, desc, publishedAt, url }) => {
  console.log(title);
  return (
    <div className="cards">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={() => window.open(url, "_blank")}>Read more</button>
      <p className="date">Published on : {publishedAt}</p>
    </div>
  );
};
export default cards;
