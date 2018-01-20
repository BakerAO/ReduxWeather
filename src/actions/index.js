const API_KEY = 'b98c2f65a922898ae45fbab474762bdf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
    return {
        type: FETCH_WEATHER

    };
}