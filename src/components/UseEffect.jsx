import React, { useEffect, useState } from "react";

function UseEffect() {
  const [name, setname] = useState("");
  const [getdata, setGetdata] = useState([]);
  const [filteredUserId, setFilteredUserId] = useState(null);

  useEffect(() => {
    const APIFun = async () => {
      const APIURL = await fetch("https://jsonplaceholder.typicode.com/posts");
      const APICovertjson = await APIURL.json();
      setGetdata(APICovertjson);
    };
    APIFun();
  }, []);

  const handleClick = (userId) => {
    setFilteredUserId(userId);
  };

  return (
    <>
    <div className="main-useefct">

      <button onClick={() => handleClick(1)}>Filter User ID 1</button>
      <button onClick={() => handleClick(2)}>Filter User ID 2</button>
      <button onClick={() => handleClick(3)}>Filter User ID 3</button>
      <button onClick={() => handleClick(4)}>Filter User ID 4</button>
      <button onClick={() => handleClick(5)}>Filter User ID 5</button>
      <button onClick={() => handleClick(6)}>Filter User ID 6</button>
      <button onClick={() => handleClick(null)}>Show All</button>
 

      <div className="commentmain">
        {
          getdata .filter((data) => filteredUserId ? data.userId === filteredUserId : true)

          .map((data) => (
            <div
              className={`commentinner ${data.userId + "name"}`}
              key={data.id}
            >
              <h2>{data.title}</h2>
              <p>{data.body}</p>
              <p>
                <b>User ID : </b> {data.userId}
              </p>
            </div>
          ))}
      </div>

     
      </div>
    </>
  );
}

export default UseEffect;
