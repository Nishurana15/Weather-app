import {useState} from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
export default function WeatherApp(){
    let [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feels_like:39.09,
        humidity:48,
        temp:34.63,
        tempMax:34.63,
        tempMin:34.63,
        weather:"broken clouds",
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}