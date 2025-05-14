import { useState } from "react";
import React from "react";

function Map() {
  const items = ["Apple", "Banana", "Cherry"];
  const itemsColor = ["Red", "Green", "Black"];
  const itemsObj = [
    {
      id: "1",
      Name: "Chiman",
      Surname: "Mandali",
      Age: "35",
    },
    {
      id: "2",
      Name: "Rohan",
      Surname: "Patel",
      Age: "40",
    },
    {
      id: "3",
      Name: "Raj",
      Surname: "Sharma",
      Age: "42",
    },
    {
      id: "4",
      Name: "Krish",
      Surname: "Kanani",
      Age: "45",
    },
  ];

  return (
    <>

    <div className="filterpage">

    
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>

      <ul>
        {itemsColor.map((data, index) => (
          <li key={index} data-atr={data}>
            {data}
          </li>
        ))}
      </ul>
      <h1>Only Red Color</h1>
      <ul>
        {itemsColor.map((data, index) => (
          <li key={index}>{itemsColor[0]}</li>
        ))}
      </ul>
      <h1>Filter Only Red Color</h1>
      <ul>
        {itemsColor
          .filter((color) => color === "Red")
          .map((color, index) => (
            <li key={index} data-atr={color}>
              {color}
            </li>
          ))}
      </ul>

      <ul className="bio-block">
        {itemsObj.map((data, index) => (
          <li key={index}>
            <span data-id={data.id}>
              <b>ID:</b> {data.id}
            </span>
            <br />
            <span data-id={data.Name}>
              <b>Name:</b> {data.Name}
            </span>
            <br />
            <span data-id={data.Surname}>
              <b>Surname:</b> {data.Surname}
            </span>
            <br />
            <span data-id={data.Age}>
              <b>Age:</b> {data.Age}
            </span>
            <br />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default Map;

export function UserList() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={user.id}>
          {index} - {user.name}
        </li>
      ))}
    </ul>
  );
}

export function Demo() {
  const demoarr = ["Rahul", "Chetan", "Raj", 30];
  const obj = [
    {
      name: "raj",
      city: "Abad",
      age: 20,
    },
  ];

  return (
    <div>
      {demoarr.map((name, index) => (
        <h1>{name}</h1>
      ))}

      <div>
        {obj.map((detail, index) => (
          <div key={detail.name}>
            <span>{detail.name}</span> ,<span>{detail.city}</span> ,
            <span>{detail.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Filtor() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000 },
    { id: 3, name: "Shoes", category: "Fashion", price: 3000 },
    { id: 4, name: "Watch", category: "Accessories", price: 5000 },
    { id: 5, name: "Headphones", category: "Electronics", price: 2500 },
    { id: 6, name: "T-Shirt", category: "Fashion", price: 1000 },
  ];

  const [filteredData, setFilteredData] = useState(products);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(products);
    } else {
      setFilteredData(products.filter((data) => data.category === category));
    }
  };

  return (
    <>
      <div className="filterpage">
        <div>
          <button onClick={() => handleFilter("Fashion")}>Fashion</button>
          <button onClick={() => handleFilter("Electronics")}>
            Electronics
          </button>
          <button onClick={() => handleFilter("Accessories")}>
            Accessories
          </button>
          <button onClick={() => handleFilter("All")}>All</button>
        </div>

        <div>
          {filteredData.map((data) => (
            <div key={data.id} className="productmain">
              <div>
                <label>Product Name : </label>
                {data.name}
              </div>
              <div>
                <label>Product Category :</label>
                {data.category}
              </div>
              <div>
                <label>Product Price :</label>
                {data.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
