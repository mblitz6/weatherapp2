import React, { useState, useEffect } from 'react';
import { Search, Cloud, Sun, CloudRain } from 'lucide-react';
import { WeatherCard } from './components/WeatherCard';

function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Simulated weather data
  const weatherData = {
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    location: 'San Francisco, CA'
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center p-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1562155955-1cb2d73488d7?auto=format&fit=crop&q=80&w=2000')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Search Bar */}
      <div className="w-full max-w-md mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Weather Display */}
      <WeatherCard {...weatherData} />

      {/* Weather Icons */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none">
        <div className="relative w-full h-full">
          <Cloud className="absolute left-[10%] bottom-10 text-white/30 w-16 h-16 animate-bounce" style={{ animationDuration: '3s' }} />
          <Sun className="absolute left-[30%] bottom-20 text-white/30 w-12 h-12 animate-bounce" style={{ animationDuration: '4s' }} />
          <CloudRain className="absolute left-[60%] bottom-15 text-white/30 w-14 h-14 animate-bounce" style={{ animationDuration: '3.5s' }} />
          <Cloud className="absolute left-[80%] bottom-25 text-white/30 w-16 h-16 animate-bounce" style={{ animationDuration: '4.5s' }} />
        </div>
      </div>
    </div>
  );
}

export default App;