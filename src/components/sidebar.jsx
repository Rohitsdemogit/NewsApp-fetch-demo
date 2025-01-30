import React from "react";

const Sidebar = ({ category, setCategory }) => {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="sidebar">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => setCategory(searchInput)}>Search</button>
      </div>
      <h3 onClick={() => setCategory("technology")}>Technology</h3>
      <h3 onClick={() => setCategory("science")}>Science</h3>
      <h3 onclick={() => setCategory("business")}>Business</h3>
      <h3 onclick={() => setCategory("health")}>Health</h3>
      <h3 onclick={() => setCategory("sports")}>Sports</h3>
      <h3 onclick={() => setCategory("entertainment")}>Entertainment</h3>
    </div>
  );
};
export default Sidebar;
