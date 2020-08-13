import React from 'react';
import '../App.css';

const Form = ({ weatherMetod }) => {
        return(
            <form onSubmit={weatherMetod}>
                <input className="input" type="text" name="city" placeholder="your city"/>
                <button className="button">Get it</button>
            </form>
        )
}

export default Form; 