import { createContext, useReducer } from "react"
import WeatherReducer from "./WeatherReaducer"


const WeatherContext= createContext()

export const Weatherprovider=({children})=>{

    const initialState={
      weatherData:null,
    }
    const [state, dispatch] = useReducer(WeatherReducer, initialState)

    return(
        <WeatherContext.Provider value={{...state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext


