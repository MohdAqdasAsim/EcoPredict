import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to get weather data by location (latitude and longitude)
export const getWeatherData = async (lat: number, lon: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: 'metric',  // You can use 'imperial' for Fahrenheit
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

// src/services/weatherService.ts
export const getWeatherDataByCity = async (city: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    console.log(response.json);
    
    return await response.json();
};


// src/services/weatherService.ts

// Function to get the latitude and longitude of a city
export const getCityCoordinates = async (city: string) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch city coordinates');
    }
    const data = await response.json();
    if (data.length === 0) {
        throw new Error('City not found');
    }
    const { lat, lon } = data[0];
    return { latitude: lat, longitude: lon };
};

// Function to get air quality data based on latitude and longitude
export const getAirQualityData = async (latitude: number, longitude: number) => {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch air quality data');
    }
    return await response.json();
};
