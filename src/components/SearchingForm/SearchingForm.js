import React, {useState} from 'react';
// import propTypes from 'prop-types';
// import styled from 'styled-components';

function SearchingForm(props){

    const [city, setCity] = useState('');
    
    const handleChange = (event) => {
        setCity(event.target.value);
      }

    const handleSubmit = (event) => {
        alert('Podano następujące miasto: ' + city);
        event.preventDefault();
    }

      console.log(city);
    return <form  onSubmit={handleSubmit}>
                <label>
                    Wpisz miasto:
                    <input
                        data-test='component-input'
                        type='text'
                        value={city}
                        onChange={handleChange}
                    >
                    </input>
                </label>
               <button
                 data-test='component-button'
                
               >
                   Szukaj
               </button>
           </form>
}

export default SearchingForm;