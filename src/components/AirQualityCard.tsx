// src/components/AirQualityCard.tsx
import React, { useState, useEffect } from 'react';
import { getCityCoordinates, getAirQualityData } from '../services/weatherService';

interface AirQualityCardProps {
    city: string;
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ city }) => {
    const [airQualityData, setAirQualityData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAirQuality = async () => {
            if (!city) return;
            try {
                setLoading(true);
                const { latitude, longitude } = await getCityCoordinates(city);
                const data = await getAirQualityData(latitude, longitude);
                setAirQualityData(data);
            } catch (err) {
                setError('Failed to fetch air quality data');
            } finally {
                setLoading(false);
            }
        };

        fetchAirQuality();
    }, [city]);

    return (
        <div className="bg-white shadow-md p-4 rounded-lg mt-4">
            <h3 className="font-bold text-xl">Air Quality</h3>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {airQualityData && (
                <div className="mt-2">
                    <p>AQI: <span className="font-semibold">{airQualityData.list[0].main.aqi}</span></p>
                    <p>PM2.5: <span className="font-semibold">{airQualityData.list[0].components.pm2_5} µg/m³</span></p>
                    <p>PM10: <span className="font-semibold">{airQualityData.list[0].components.pm10} µg/m³</span></p>
                    <p>NO2: <span className="font-semibold">{airQualityData.list[0].components.no2} µg/m³</span></p>
                </div>
            )}
        </div>
    );
};

export default AirQualityCard;
