import React from 'react';

const Weather = ({city, country, temp}) => {
        return(
            <div>
                { city &&
                    <div>
                    <p>Where:{city}, {country}</p>
                    <p>Temperature:{temp}°C</p>
                    </div>
                }git 
            </div>
        )
}

export default Weather; 