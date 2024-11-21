import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  location: string;
}

export function WeatherCard({ temperature, humidity, windSpeed, condition, location }: WeatherCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg w-full max-w-md transform transition-all hover:scale-[1.02]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">{location}</h2>
            <p className="text-gray-500 mt-1">{condition}</p>
          </div>
          <span className="text-5xl font-bold text-gray-800">{temperature}°</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Feels like</p>
              <p className="font-semibold">{temperature - 2}°</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="font-semibold">{humidity}%</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Wind</p>
              <p className="font-semibold">{windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}