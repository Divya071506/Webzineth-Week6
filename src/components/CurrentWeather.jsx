import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weatherService";

const CurrentWeather = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadWeather = async () => {
      try {
        const res = await getCurrentWeather(city);
        setData(res);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadWeather();
  }, [city]);

  if (!data) return <p className="text-center text-gray-300">Loading current weather...</p>;
  return (
    <div className="bg-[#262B44] rounded-xl p-6 text-white shadow-md">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <div className="flex items-center gap-4">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}alt="icon" className="w-20"/>
        <div><p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p><p className="text-sm text-gray-300">{data.weather[0].main}</p></div>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        {new Date(data.dt * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
};
export default CurrentWeather;
