import React, { useEffect } from 'react';
import './WeatherInfo.css';
import umidade from '../assets/umidade.png';
import pressão from '../assets/62848.png';
import termo from '../assets/termo.png';

function WeatherInfo({ weather }) {
    useEffect(() => {
        if (weather && weather.weather) {
            const weatherCondition = weather.weather[0].main;

            const getBackgroundGradient = (condition) => {
                switch (condition) {
                    case 'Clear':
                        return 'linear-gradient(150deg , #87CEEB, #FFFFFF)'; // Céu claro
                    case 'Rain':
                        return 'linear-gradient(150deg, #708090, #2F4F4F)'; // Chuva
                    case 'Snow':
                        return 'linear-gradient(150deg, #FFFFFF, #D3D3D3)'; // Neve
                    case 'Clouds':
                        return 'linear-gradient(240deg, #808080, #B0C4DE)'; // Nublado
                    case 'Thunderstorm':
                        return 'linear-gradient(to bottom, #4B0082, #000000)'; // Tempestade
                    case 'Drizzle':
                        return 'linear-gradient(to bottom, #4682B4, #87CEEB)'; // Garoa
                    case 'Mist':
                    case 'Fog':
                        return 'linear-gradient(to bottom, #A9A9A9, #696969)'; // Névoa
                    default:
                        return 'linear-gradient(to bottom, #F0F8FF, #ADD8E6)'; // Padrão
                }
            };


    

            document.body.style.backgroundImage = getBackgroundGradient(weatherCondition);
        }
        
    }, [weather]);

    if (!weather || !weather.weather) {
        return null;
    }

    return (
        <div className="weather-container">
            <h2>{weather.name}</h2>
            <div className="weather-info">
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Weather Icon"
                />
                <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className="description">{weather.weather[0].description}</p>

            <div className="details">
                <div className="detail-item">
                    <img src={termo} alt="Thermal Icon" />
                    <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                </div>

                <div className="detail-item">
                    <img src={umidade} alt="Humidity Icon" />
                    <p>Umidade: {weather.main.humidity}%</p>
                </div>

                <div className="detail-item">
                    <img src={pressão} alt="Pressure Icon" />
                    <p>Pressão: {weather.main.pressure}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfo;
