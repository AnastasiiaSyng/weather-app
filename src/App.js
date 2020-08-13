import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import '../src/App.css';

const API_KEY = 'e6a17789e05bffa8f2776795f862b944'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            temp: undefined,
            city: undefined,
            country: undefined,
            error: undefined
        }
    }
  

    gettingWeather = async (e) => {
            e.preventDefault();
            const city = e.target.elements.city.value;
        
            if (city) {
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                error: ''
            })
        }
    }

    render() {
        const { temp, city, country, error } = this.state;
        return (
            <div className="container">
                <div className="wrapper">
                    < Info />
                    < Form weatherMetod={this.gettingWeather}/>
                    < Weather  
                    temp={temp}
                    city={city}
                    country={country}
                    error={error}
                    />
                </div>
            </div> 
        )
    }
}
export default App;