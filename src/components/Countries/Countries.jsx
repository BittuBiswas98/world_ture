import './Countries.css'
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);

    // console.log(countries)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

const handleVisitedCountries=(country)=>{
    console.log("add this to your visited country");
    console.log(country)
}



    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <h3>Visited Countries</h3>
                <ul>

                </ul>
            </div>
           <div className='country-container'>
           {
              countries.map(country=><Country country={country} key={country.cca3}
                handleVisitedCountries={handleVisitedCountries} 
              ></Country>)  
            }
           </div>
        </div>
    );
};

export default Countries;