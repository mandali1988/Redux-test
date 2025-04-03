import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router"; 
import "./App.css";
import ChangeExample from "./components/event";
import Map, { UserList, Demo, Filtor } from "./components/Map";
import Movies from "./components/Movies";
import UseEffect from "./components/UseEffect";
import Form from "./components/Form";
import MultiInputHandling from "./components/MultiInputHandling";
import Meal from "./components/Meal";
import Home from "./components/Home"; 
import RoutingHooks from "./components/RoutingHooks";
import Login from "./components/Login"; 
import Pxabay from "./components/Pxabay";
import Diagonal from "./components/Diagonal";


function App() {
  // const handleMinus = () => {

  //   if (count === 0) {
  //         alert("Count cannot be less than 0");
  //   }
  //   else {
  //     setCount((prevCount) => prevCount - 1);
  //   }

  // };

  // const handlePlus = () => {

  //   if (count == 10) {
  //         alert("Count cannot be less than 10");
  //   }
  //   else {
  //     setCount((prevCount) => prevCount + 1);
  //   }

  // };
  return (
    <>
      {/*  
      
      <h1>Vite + React</h1>
      <div className="card">
        
        <button onClick={handleMinus}> Minus  </button>
         <h2>{count}</h2>
        <button onClick={handlePlus}> Plus</button>
         
      </div>
      <ChangeExample />
      <Map />
      <UserList />
      <Demo /> 
      <Filtor />
      <Movies /> 
      <UseEffect />
      <Form />
      <MultiInputHandling />
      
      


      <Meal />*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" />
            <Route path="/diagonal" element={<Diagonal />} />
            <Route path="/map" element={<Map />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/filtor" element={<Filtor />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Movies />} />
            <Route path="/form" element={<Form />} />
            <Route path="/event" element={<ChangeExample />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/pxabay" element={<Pxabay />} />
            <Route path="/routinghooks" element={<RoutingHooks />} /> 
            <Route path="/login" element={<Login />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
