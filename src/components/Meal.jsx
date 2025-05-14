import React, { useEffect, useState } from "react";

function Meal() {
  const [apiData, setApiData] = useState([]);
  const [area, setArea] = useState("Canadian");

  const [search, setSearch] = useState(" ");

  useEffect(() => {
    const mealAPI = async () => {
      const APILink = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const APILinkconver = await APILink.json();
      setApiData(APILinkconver.meals);
    };

    mealAPI();
  }, [area]);

  const handleClick = (area) => {
    setArea(area);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const APILink = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const APILinkconver = await APILink.json();
    setApiData(APILinkconver.meals);
    console.log(APILinkconver.meals);
    setSearch(" ");
  };

  return (
    <>
      <div className=" ">
        <div className="movielistFilter" style={{ paddingTop: "0" }}>
          <button onClick={() => setArea("Indian", "Chinese")}>All</button>
          <button onClick={() => setArea("Canadian")}>Canadian</button>
          <button onClick={() => setArea("Chinese")}>Chinese</button>
          <button onClick={() => handleClick("Indian")}>Indian</button>
          <button onClick={() => handleClick("american")}>American</button>
          <button onClick={() => handleClick("russian")}>Russian</button>
        </div>

        <div className="commentmain">
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Your Favorite Meal"
            />
          </form>
        </div>

        <div className="meallist">
          {apiData.map((data) => (
            <div className="mealblock">
              <div className="mealimg">
                <img src={data.strMealThumb} />
              </div>
              <h3>{data.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Meal;
