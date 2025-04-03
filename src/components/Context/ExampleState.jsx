import React, { useState, useEffect } from "react";
import ExampleContext from "./ExampleContext";

function ExampleState(props) {
  const money = 1000;

  const [imageData, setImageData] = useState([]);
  const [searchimageData, setSearchImageData] = useState([]);

  const ApiKey = "49556707-cdb9496d96e04e3dc6b95a2ad";

  useEffect(() => {
    const dataApi = async () => {
      const Imgapi = await fetch(
        `https://pixabay.com/api/?key=${ApiKey}&q=${searchimageData}&yellow+flowers&image_type=photo&pretty=true&per_page=100`
      );
      const APiJson = await Imgapi.json();
      setImageData(APiJson.hits);
    };
    dataApi();
  }, [searchimageData]);

  const FilterCat = async (cat) => {
    const Imgapi = await fetch(
      `https://pixabay.com/api/?key=${ApiKey}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const APiJson = await Imgapi.json();
    setImageData(APiJson.hits);
  };
  return (
    <ExampleContext.Provider
      value={{
        money,
        imageData,
        setImageData,
        FilterCat,
        searchimageData,
        setSearchImageData
      }}
    >
      {props.children}
    </ExampleContext.Provider>
  );
}

export default ExampleState;
