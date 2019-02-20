import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

export default class weatherApp extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    forecast: [],
    localtime: undefined,
    error: undefined,
    img: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`https://api.apixu.com/v1/forecast.json?key=ef186164f5694436ade215218191101&q=${city},&days=5`);
    const apiData = await apiCall.json();
    console.log(apiData);
    if ( city){
      this.setState ({  
      temperature: apiData.current.temp_f,
      city: apiData.location.name,
      country: apiData.location.country,
      humidity: apiData.current.humidity,
      description :apiData.current.condition.text,
      localtime: apiData.location.localtime,
      error: "",
      img: apiData.current.condition.icon
    });
    }else{
      this.setState ({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description :undefined,
        localtime: undefined,
        error: "*Please enter the values*",
        img: undefined,
      });
    }
  }

  render(){
    return(
      <div className="container">
      <div className="main">
      <div>
        <Form getWeather = {this.getWeather} />
      </div>
      <div>
        <Weather 
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        localtime = {this.state.localtime}
        error = {this.state.error}
        img= {<img src={this.state.img}></img>}
        />
      </div>
      </div>
      </div>
    );
  }
};
