import React, { useState } from "react";
import { dataList } from "./data.js";
import { Link, Outlet, useNavigate, useParams } from "react-router";

function Movies() {
  const [movieslist, setMovieslist] = useState(dataList);

  const handleClick = (cat) => {
    setMovieslist(dataList.filter((data) => data.category == cat));
  };

  const {id} = useParams();

  const navig = useNavigate();

  const GoHome = () => {
    navig("/");
  }

  const GoBak = () => {
    navig(-1);
  }


  return (



    <div className="movielist">
      <div>
        <button onClick={GoHome}>Home</button><br/>
        <button onClick={GoBak}>Go Back</button>

      </div>
          {dataList.length > 0 ? (
        <Link to="/movies/all">
          <button onClick={() => setMovieslist(dataList)}>All</button>&nbsp; &nbsp;
        </Link>
      ) : null}

     
      {dataList.map((data) =>
        data.category ? (
          <Link to={`/movies/${data.category.replace(/\s/g, "-")}`}>
            <button onClick={() => handleClick(data.category)}>
              {data.category}
            </button> &nbsp;
          </Link>
        ) : null
      )}
 
      <div className="movieblock">
        {movieslist.map((data) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <img
              src={data.image}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <p>{data.description}</p>
            <div className="prodinter">
              <h3>$ {data.price}</h3>
              <span>{data.category}</span>
            </div>
            <div className="prodrating">
              {data.rating.rate} - {data.rating.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
