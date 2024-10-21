// src/components/WeatherCard.tsx
import React, { useEffect, useState } from 'react';
import { getWeatherDataByCity } from '../services/weatherService';

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

interface WeatherCardProps {
    city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) return;
            try {
                setLoading(true);
                const data = await getWeatherDataByCity(city);
                setWeatherData(data);
            } catch (err) {
                setError('Failed to fetch weather data.');
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, [city]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-600">{error}</div>;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            {weatherData && (
                <>
                    <h2 className="text-xl font-semibold mb-2">Weather in {weatherData.name}</h2>
                    <p className="text-lg">
                        Temperature: {weatherData.main.temp}°C
                    </p>
                    <p className="text-lg">
                        Humidity: {weatherData.main.humidity}%
                    </p>
                    <p className="text-lg capitalize">
                        Description: {weatherData.weather[0].description}
                    </p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className="w-16 h-16 mt-2"
                    />
                </>
            )}
        </div>
    );
};

export default WeatherCard;
