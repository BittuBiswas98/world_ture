import './Countries.css'
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlag,setVisitedFlag]=useState([]);

    // console.log(countries)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

const handleVisitedCountries=(country)=>{
    console.log("add this to your visited country");
    const newVisitedCountries=[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
};

const handleVisitedFlag=flag=>{
    const newVisitedFlag=[...visitedFlag,flag]
    setVisitedFlag(newVisitedFlag)
}



    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <h3>Visited Countries:{visitedCountries.length}</h3>
                <ul>
                   {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

            <div className='flag-container'>
                 {
                   visitedFlag.map((flag,idx)=><img src={flag} key={idx}></img>) 
                 }
            </div>
           <div className='country-container'>
           {
              countries.map(country=><Country country={country} key={country.cca3}
                handleVisitedCountries={handleVisitedCountries} 
                handleVisitedFlag={handleVisitedFlag}

              ></Country>)  
            }
           </div>
        </div>
    );
};

export default Countries;