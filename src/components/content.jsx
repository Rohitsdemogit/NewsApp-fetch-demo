import React from "react";
import Cards from "./cards";
import { useEffect, useState } from "react";

const Content = (category, setCategory) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category.category}/in.json`
      );
      const jsonData = await response.json();
      setData(jsonData.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setCurrentPage(1);
  }, [category]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {currentItems.map((index) => (
            <Cards
              key={index.url}
              title={index.title}
              desc={index.description}
              publishedAt={index.publishedAt}
              url={index.url}
            />
          ))}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
      <button className="refresher" onClick={fetchData}></button>
    </div>
  );
};
export default Content;
