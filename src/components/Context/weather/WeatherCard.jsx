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
        <div className="container my-3">
            <div className="card p-3 rounded-0 shadow-sm">
                <h1 className="h3 text-center border-bottom">Weather</h1>

                <WeatherForm/>

                <span className='d-flex align-content-center justify-content-between'>
                    <span>
                        <h1 className="display-6">{weatherData.location.name}</h1>
                        <h1 className="display-6">{weatherData.current.temp_c}°C</h1>
                    </span>

                    <span>
                        <img src={weatherData.current.condition.icon} alt="WeatherImage" className='img-fluid'/>
                        <p className='h3 mt-2'>{weatherData.current.condition.text}</p>
                    </span>
                </span>

            </div>
        </div>
    )
}

export default WeatherCard



