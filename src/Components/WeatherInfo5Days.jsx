import './WeatherInfo5Days.css'

function WeatherInfo5Days({ weather5Days }) {
    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (dailyForecast[date]) {
          
            if (forecast.main.temp_max > dailyForecast[date].temp_max) {
                dailyForecast[date].temp_max = forecast.main.temp_max
                dailyForecast[date].weather = forecast.weather[0] 
            }
            
            dailyForecast[date].temp_min = Math.min(dailyForecast[date].temp_min, forecast.main.temp_min)
        } else {
          
            dailyForecast[date] = {
                temp_min: forecast.main.temp_min,
                temp_max: forecast.main.temp_max,
                weather: forecast.weather[0],
                dt: forecast.dt
            }
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(forecast) {
        const newDate = new Date(forecast.dt * 1000).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit'
        })
        return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão Próximos 5 Dias</h3>
            <div  className='weather-list'>

            {next5DaysForecast.map(forecast => (
                <div className='weather-item' key={forecast.dt}>

                    <p className='forecast-day'>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`} alt="" />
                    <p className='forecast-description'>{forecast.weather.description}</p>
                    <p>{Math.round(forecast.temp_min)}°C min / {Math.round(forecast.temp_max)}°C max</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default WeatherInfo5Days;
