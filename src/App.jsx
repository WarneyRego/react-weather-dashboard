import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import WeatherInfo5Days from './Components/WeatherInfo5Days';


function App() {

  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

 

  async function searchCity() {
    const city = inputRef.current.value;
    const key = '0f01a9ef39744f160966584f0f1cd174';

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);

      const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;
      const apiInfo5Days = await axios.get(url5Days);
      setWeather5Days(apiInfo5Days.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }

  return (
    <div className='container'>
      
      
        <>
          <div className='header'>
            <h1>WeatherWise</h1>
            <img className='logo' src="https://cdn-icons-png.flaticon.com/512/3262/3262946.png" alt="" />
          </div>
          <div className='item'>
            <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
            <button onClick={searchCity}>Buscar</button>
            {weather && <WeatherInfo weather={weather} />}
            {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
          </div>
        </>
      
    </div>
  );
}

export default App;
