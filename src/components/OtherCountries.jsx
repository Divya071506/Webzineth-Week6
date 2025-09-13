import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weatherService";

const cities = ["London", "New York", "Tokyo", "Sydney", "Paris"];
const OtherCountries = () => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await Promise.all(
          cities.map(async (city) => {
            const res = await getCurrentWeather(city);
            return { city, ...res };
          })
        );
        setWeatherData(data);
      } catch (err) {
        console.error("Failed to fetch cities weather:", err.message);
      }
    };
    fetchAll();
  }, []);

  if (!weatherData.length) return <p className="text-gray-400">Loading other countries...</p>;
  return (
    <div className="bg-[#262B44] rounded-xl p-4 shadow-md text-white">
      <h3 className="text-lg font-semibold mb-3">Other Countries</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {weatherData.map((cityData, idx) => (
          <div key={idx} className="bg-[#2E335A] rounded-lg p-3 text-center">
            <p className="font-semibold">{cityData.name}</p>
            <img src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`} alt="icon" className="mx-auto"/>
            <p className="text-xl font-bold">{Math.round(cityData.main.temp)}°C</p>
            <p className="text-sm text-gray-300">{cityData.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCountries;
