import { useState } from "react";

import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp() {
    const [Weatherinfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 314.06,
        humidity: 8,
        pressure: 999,
        temp: 317.72,
        tempmax: 317.72,
        tempmin: 317.72,
        weather: "haze"
    })

    let updateinfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h1>Weather App By PREM</h1>

            <SearchBox updateInfo={updateinfo}/>
            <InfoBox info={Weatherinfo}/>
        </div>
    )
}