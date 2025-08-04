import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({

        city: "Delhi",
        feelsLike: 37.82,
        humidity: 71,
        temp: 30.97,
        tempMax: 30.97,
        tempMin: 30.97,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Vishesh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}