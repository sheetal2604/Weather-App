import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="Weather">
      <div className="top">
        <div className="location">
          <p>{data?.name}</p>
        </div>
        <div className="temp">
          <h1>{data.main?.temp.toFixed()}°F</h1>
          <p>Feels like {data.main?.feels_like?.toFixed()}°F</p>
        </div>
        <div className="description">
          <p>{data.weather?.[0].description}</p>
          <p>The low temperature will be {data.main?.temp_min?.toFixed()}°F</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
