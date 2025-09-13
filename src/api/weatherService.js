const API_KEY = "ae97a76ffec171568ec31f8982b1125f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const getCurrentWeather = async (city) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("City not found");
  return await res.json();
};
export const getForecast = async (city) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Forecast not found");
  return await res.json();
};
