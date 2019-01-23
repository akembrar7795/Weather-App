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
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const region = e.target.elements.region.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`https://api.apixu.com/v1/current.json?key=ef186164f5694436ade215218191101&q=${city},${region},${country}`);
    const apiData = await apiCall.json();
    console.log(apiData);
    if ( city && country ){
      this.setState ({  
      temperature: apiData.current.temp_f,
      city: apiData.location.name,
      country: apiData.location.country,
      humidity: apiData.current.humidity,
      description :apiData.current.condition.text,
      error: ""
    });
    }else{
      this.setState ({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description :undefined,
        error: "*Please enter the values*"
      });
    }
  }

  render(){
    return(
      <div className="container">
      <div className="main">
      <div className="main-sub">
        <Title/>
        <Form getWeather = {this.getWeather} />
        <Weather 
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />
      </div> 
      </div>
      </div>
    );
  }
};
