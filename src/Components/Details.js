import React from "react";

const Details = ({ data, toggle }) => {
  return (
    <div>
      {toggle && (
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.pressure}</p> : null}
            <p>Pressure</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed?.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
