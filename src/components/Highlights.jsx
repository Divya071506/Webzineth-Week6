import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weatherService";

const Highlights = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getCurrentWeather(city);
        setData(res);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadData();
  }, [city]);

  if (!data) return <p className="text-gray-400">Loading highlights...</p>;
  return (
    <div className="bg-[#262B44] text-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Today's Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#2E335A] p-4 rounded-xl text-center">
          <p className="text-sm text-gray-300">Humidity</p>
          <p className="text-2xl font-bold">{data.main.humidity}%</p>
        </div>
        <div className="bg-[#2E335A] p-4 rounded-xl text-center">
          <p className="text-sm text-gray-300">Pressure</p>
          <p className="text-2xl font-bold">{data.main.pressure} hPa</p>
        </div>
        <div className="bg-[#2E335A] p-4 rounded-xl text-center">
          <p className="text-sm text-gray-300">Wind Speed</p>
          <p className="text-2xl font-bold">{data.wind.speed} m/s</p>
        </div>
        <div className="bg-[#2E335A] p-4 rounded-xl text-center">
          <p className="text-sm text-gray-300">Visibility</p>
          <p className="text-2xl font-bold">{data.visibility / 1000} km</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
