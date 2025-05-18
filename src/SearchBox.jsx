import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const [error, SetError] = useState(null);


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5a50aa3421430f3b66fe617f80ce93b5";

    let getweatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);

        let result = {
            city: city,
            temp: jsonresponse.main.temp,
            humidity: jsonresponse.main.humidity,
            pressure: jsonresponse.main.pressure,
            tempmax: jsonresponse.main.temp_max,
            tempmin: jsonresponse.main.temp_min,
            feelslike: jsonresponse.main.feels_like,
            weather: jsonresponse.weather[0].description // ✅ fixed typo
        };
        return result;
        } catch(err){
            SetError("no such place");
            throw(err)
        }
        
    };

    let handlechange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city)
        let newInfo = await getweatherinfo();
        updateInfo(newInfo);
        setCity("");
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>{error}</p>
                }
            </form>
        </div>
    );
}
