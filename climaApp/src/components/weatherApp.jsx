import { useState } from "react"
import WeatherForm from "./weatherForm"

export default function WeatherApp(){
    const [weather, setWeather] = useState(null)
    

async function loadInfo (city ='london') {
    try {
        const request = await fetch(
            `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
            )
            console.log({request})

        const json= await request.json()
        
        setWeather(json)

        console.log(json)
    } catch (error) {
        console.log({error})
    }   
}

function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)

}
return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <div>{weather?.current.temp_c}</div>
    </div>
  ) 
}