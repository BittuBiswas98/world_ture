import { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries}) => {
    console.log(country)
    const {name,flags,capital,population,area,cca3    }=(country);
const [visited,setVisited]=useState(false)
const handlaVisited=()=>{
    setVisited(!visited);
}
console.log(handleVisitedCountries)

    return (
        <div className={`${visited?'visited':'country'}`}>
            <h4 style={{color:visited?'red':'black'}} >{name.common}</h4>
            <img src={flags.png} alt="" />
            
            <h5>Capital: {capital}</h5>
            <p>Population:{population}</p>
            <p>area: {area} k.m^2</p>
            <p>code:{cca3}</p>
            <button onClick={handlaVisited}>{visited ? 'Visited' : "Going"}</button>
            {
                visited ? 'I have visited the country': "I want to visit"
            }
        </div>
    );
};

export default Country;