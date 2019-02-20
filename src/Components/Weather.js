import React from "react";

    const Weather = props => (
        <div className="text-center title">
            { props.city && props.country && <p className="city">{props.city}, {props.country}</p>}
            <span>
            { props.img && props.temperature && <p className="city">{props.img} {props.temperature}</p>}
            { }
            </span>
            { props.localtime && <p>{props.localtime}</p>}
            { props.error && <p>{props.error}</p>}
        <div>
            {props.forecast1 && <p>{props.forecast1}</p>}
        </div>
        </div>
    );

    export default Weather;