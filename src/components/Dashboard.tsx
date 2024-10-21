// src/components/Dashboard.tsx
import { useState } from 'react';
import WeatherCard from './WeatherCard';
import AirQualityCard from './AirQualityCard';

const Dashboard = () => {
  const [city, setCity] = useState<string>('');

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      console.log(`Fetching data for city: ${city}`);
    } else {
      console.log('Please enter a valid city name.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Select City</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-lg">City Name:</label>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter City Name"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
          Fetch Weather
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-2">Current Conditions</h2>
      <WeatherCard city={city} />
      <AirQualityCard city={city} />
    </div>
  );
};

export default Dashboard;
