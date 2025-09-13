import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weatherService";

const TodayHighlights = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await getCurrentWeather(city);
        setData(res);
      } catch (err) {
        console.error("Error loading highlights:", err.message);
      }
    };
    fetchWeather();
  }, [city]);

  if (!data)
    return (
      <div className="bg-[#262B44] rounded-xl p-6 text-center">
        <p className="text-gray-300">Loading highlights...</p>
      </div>
    );

  return (
    <div className="bg-[#262B44] rounded-xl p-6 grid grid-cols-2 gap-4 text-white">
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Wind Speed</h4>
        <p className="text-xl">{data.wind.speed} m/s</p>
      </div>
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Humidity</h4>
        <p className="text-xl">{data.main.humidity}%</p>
      </div>
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Pressure</h4>
        <p className="text-xl">{data.main.pressure} hPa</p>
      </div>
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Visibility</h4>
        <p className="text-xl">{(data.visibility / 1000).toFixed(1)} km</p>
      </div>
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Sunrise</h4>
        <p className="text-xl">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="bg-[#1E213A] p-4 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">Sunset</h4>
        <p className="text-xl">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default TodayHighlights;
