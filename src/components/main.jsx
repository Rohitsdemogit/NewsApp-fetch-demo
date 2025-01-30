import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
const Main = () => {
  const [category, setCategory] = useState("sports");

  return (
    <div className="main">
      <Sidebar category={category} setCategory={setCategory} />
      <Content category={category} setCategory={setCategory} />
    </div>
  );
};

export default Main;
