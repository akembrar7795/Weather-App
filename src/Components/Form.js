import React from "react";

const Form = props => (
    <div className="text-center">
      <form onSubmit={props.getWeather} >
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="region" placeholder="State"/>
        <input type="text" name="country" placeholder="Country"/>
        <div>
            <button>Submit</button>
        </div>
    </form>  
    </div>
    
);

export default Form;