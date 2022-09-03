import Weather from "./Components/Weather";
import Search from "./Components/Search";
import Details from "./Components/Details";
import Graph from "./Components/Graph";
import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("New York");
  const [toggle, setToggle] = useState(false);

  const handleSearchTerm = (e) => {
    console.log("e", e);
    setLocation(e);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const apiCall = () => {
    var config = {
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=07a4b69b5214b4592d281614a5d225d9`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    if (location) {
      apiCall();
    }
  }, [location]);

  return (
    <>
      <div className="app">
        <div className="app-background">
          <div className="app-container">
            <Search searchTerm={handleSearchTerm} />
            <Weather data={data} />
            <button className="button" onClick={handleToggle}>
              Know More
            </button>
            <Details data={data} toggle={toggle} />
            <Graph location={location} toggle={toggle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
