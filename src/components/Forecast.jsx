import React, { useEffect, useState } from "react";
import { getForecast } from "../api/weatherService";

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForecast = async () => {
      try {
        const res = await getForecast(city);
        const filtered = res.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(filtered.slice(0, 5)); 
        setLoading(false);
      } catch (err) {
        console.error("Error loading forecast:", err.message);
        setLoading(false);
      }
    };
    loadForecast();
  }, [city]);

  if (loading) return <p className="text-gray-400">Loading forecast...</p>;

  return (
    <div className="bg-[#262B44] text-white p-6 rounded-xl shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecast.map((day, idx) => (
          <div key={idx} className="bg-[#2E335A] p-4 rounded-xl text-center">
            <p className="text-sm text-gray-300 mb-2">{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short",})}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon"className="mx-auto w-12"/>
            <p className="text-lg font-bold">{Math.round(day.main.temp)}°C</p>
            <p className="text-xs text-gray-400">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
