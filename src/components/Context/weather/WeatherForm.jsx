import React, { useContext, useState } from 'react'
import WeatherContext from './WeatherContext'
import { getWeather } from './WeatheAction'



const WeatherForm = () => {

    const { dispatch } = useContext(WeatherContext)

    const [text, setText] = useState("")

    const handleSave = async (e) => {
        e.preventDefault();

        const data = await getWeather(text);

        dispatch({
            type: "GET_WEATHER",
            payload: data
        })

        setText('')

    }

   

    return (
        <form className='my-3 d-flex justify-content-center' onSubmit={handleSave}>
            <input type="text"
                placeholder='Enter City Name'
                className="form-control rounded-0 w-50"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-success float-end rounded-0">Search</button>
        </form>
    )
}

export default WeatherForm