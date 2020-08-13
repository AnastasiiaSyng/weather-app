import React from 'react';

const Weather = ({city, country, temp}) => {
        return(
            <div>
                { city &&
                <div>
                <p>Where:{city}, {country}</p>
                <p>Temperature:{temp}</p>
                </div>
                }
            </div>
        )
}

export default Weather; 