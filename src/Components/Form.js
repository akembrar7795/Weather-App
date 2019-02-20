import React from "react";

const Form = props => (
    <div className="text-center">
      <form onSubmit={props.getWeather} >
        <input type="text" name="city" placeholder="Search Loaction"/>
        <button><i class="fas fa-search"></i></button>
    </form>  
    </div>
    
);

export default Form;