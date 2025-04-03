import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  NavLink,
  useNavigate,
} from "react-router";
import Form from "./Form.jsx";
import MultiInputHandling from "./MultiInputHandling.jsx";
import Meal from "./Meal.jsx";
import { dataList } from "./data.js";

function Home() {
  const [movieslist, setMovieslist] = useState(dataList);

  const [isLoggine, setIsLoggine] = useState(false);

  const navigate = useNavigate();

  const Login = () => {
    setIsLoggine(true);
    navigate("/");
  };

  const Logout = () => {
    setIsLoggine(false);
    navigate("/login");
  };

  return (
    <>
      <div className="main-div">
        <div className="main-header">
          {isLoggine && (
            <>
              <NavLink activeClassName="active" to="/filtor">
                Filtor
              </NavLink>
              <NavLink activeClassName="active" to="/movies">
                Movies
              </NavLink>
              <NavLink activeClassName="active" to="/useEffect">
                UseEffect
              </NavLink>
              <NavLink activeClassName="active" to="/movies">
                Movies
              </NavLink>
              <NavLink activeClassName="active" to="/meal">
                Meal
              </NavLink>
              <NavLink activeClassName="active" to="/pxabay">
                Pxabay
              </NavLink>
              
              {/*<NavLink activeClassName="active" to="/ecommapp">
              ECommApp
              </NavLink>
              <NavLink activeClassName="active" to="/dbord">
              DBord
              </NavLink> */}
              <button className="Login" onClick={Logout}>
                {" "}
                Logout{" "}
              </button>
            </>
          )}
          {!isLoggine && (
            <>
              <NavLink activeClassName="active" to="/map">
                Map
              </NavLink>
              <NavLink activeClassName="active" to="/demo" className="active">
                demo
              </NavLink>

              <NavLink activeClassName="active" to="/event">
                Event
              </NavLink>
              <NavLink activeClassName="active" to="/form">
                Form
              </NavLink>
              <button className="Login" onClick={Login}>
                {" "}
                Login{" "}
              </button>
            </>
          )}
        </div>
        <div className="main-content">
          <div>
            <Outlet />
          </div>
        </div>
        <footer className="main-footer">footer</footer>
      </div>
    </>
  );
}

export default Home;
