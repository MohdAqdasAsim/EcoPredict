// src/components/Dashboard.tsx
import WeatherCard from './WeatherCard';
import AirQualityCard from './AirQualityCard';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Current Conditions</h2>
            <WeatherCard />
            <AirQualityCard />
        </div>
    );
};
export default Dashboard;
