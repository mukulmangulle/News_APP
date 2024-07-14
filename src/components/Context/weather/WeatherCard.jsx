import React, { useContext, useEffect} from 'react'
import { getWeather } from './WeatheAction'



import WeatherForm from './WeatherForm'
import WeatherContext from './WeatherContext'

const WeatherCard = () => {

    const { dispatch , weatherData} = useContext(WeatherContext)

    const fetchWeather = async () => {
        const data = await getWeather("Indore")

        dispatch({
            type: "GET_WEATHER",
            payload: data
        })

    }

    useEffect(() => {
        fetchWeather()
    }, [])

    if(!weatherData){
        return(
            <h1 className="text-center">Loading...</h1>
        )
    }
     
    return (
        <div  className=" my-3 border-1 w-50 p-2"   >
                    <div id='cloud' className="card p-3 rounded-3 shadow-sm">
                <h1 className="h1 text-center border-bottom pb-3">Weather</h1>

                <WeatherForm/>

                <span className='d-flex align-content-center justify-content-between'>
                    <span>
                        <div className="h1 pt-4 fw-bold">{weatherData.location.name}</div>
                        <div className="h4 fw-bold">Temprature{weatherData.current.temp_c}°C</div>
                        <div className="h5 fw-bold ">Humidity :{weatherData.current.humidity}%</div>
                    </span>

                    <span>
                        <img src={weatherData.current.condition.icon} alt="WeatherImage" className='img-fluid'/>
                        <div className='h5 mt-2 fw-bold'>{weatherData.current.condition.text}</div>
                        <div className="h5 fw-bold ">Cloud :{weatherData.current.cloud}%</div>
                    </span>
                </span>

            </div>
        </div>
    )
}

export default WeatherCard



