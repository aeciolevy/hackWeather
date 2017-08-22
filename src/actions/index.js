import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_CITY = ' FETCH_CITY';
export const INSERT_CITY = 'INSERT_CITY';

export function fetchWeather (city) {
  console.log(city)
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function fetchCity() {
  const url = `https://wt-fd79c4f10f1b0dc8687b21648ee28821-0.run.webtask.io/wt-cities/cities?webtask_no_cache=1`;
  const request = axios.get(url)

  return {
    type: FETCH_CITY,
    payload: request
  }
}

export function insertCity (city, callback) {
  const url = `https://wt-fd79c4f10f1b0dc8687b21648ee28821-0.run.webtask.io/wt-cities/add?webtask_no_cache=1`;
  const request = axios.post(url, {city})
  request.then( () => callback());

  return {
    type: INSERT_CITY,
    payload: request
  }
}