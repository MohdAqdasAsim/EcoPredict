// src/components/WeatherCard.tsx
const WeatherCard = () => {
  return (
      <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-bold">Weather</h3>
          <p>Temperature: -- °C</p>
          <p>Humidity: -- %</p>
      </div>
  );
};
export default WeatherCard;
