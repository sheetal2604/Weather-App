import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Graph = (props) => {
  const [forecast, setForecast] = useState([]);
  const apiForecast = () => {
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props?.location}&cnt=5&units=imperial&appid=07a4b69b5214b4592d281614a5d225d9`;

    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
      
        setForecast(datas);
      })
      .catch((err) => {
        console.log("There has been an error", err);
      });
  };


  useEffect(() => {
    if (props?.location) {
      apiForecast();
    }
  }, []);



  const temperature = forecast.list?.map((item) => item.main.temp);
  const time = forecast.list?.map((item) => item.dt_txt);
  

  const graphBar = {
    options: {
      colors: ["#324e4e"],
      chart: {
        id: "basic-bar",
      },

      xaxis: {
        categories: time,

        title: {
          text: "date and time",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "black",
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: temperature,
      },
    ],
  };

  return (
    <>
      {props.toggle && (
        <div className="graphBar bold">
          <Chart
            options={graphBar.options}
            series={graphBar.series}
            type="line"
            width="500"
          />
        </div>
      )}
    </>
  );
};
export default Graph;
