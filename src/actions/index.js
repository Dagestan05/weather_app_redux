import axios from 'axios';

const API_KEY = '2cea7fc442814f6aa6d3a1e2d48a5b56'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},ru`;
  
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

// SelectBook is an action creator, it needs to return an action,
 //an object with a type property
