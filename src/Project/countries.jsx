import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
import CountryDetail from "./countryDetails";


function Neighbours() {
   const [countries, setCountries] = useState([]);
  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                const firstTwentyCountries = data.slice(0, 20);
              setCountries(firstTwentyCountries);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
}
  
  
    useEffect(() => {
      fetchCountries();
    }, []);

  return (
    <div>
    <Layout>
        <div className="ml-10">
            <h1 className="sm:m-0 font-bold text-3xl">List of Countries</h1>
            
          <div className="sm:ml-0 md:ml-0 flex flex-wrap">
                {countries.map((country, index) => (
                <Link to={`/countriesdetails/${country.name.official}`} >
                  <div key={index} className="border border-black sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2 sm:w-[250px] md:w-[335px]">
                    <div className="h-40 w-full">
                      <img src={country.flags.png} alt="" className="h-40 w-full"/>
                    </div>
                    <div>
                      <strong>Name:</strong> {country.name.official} {country.flag}
                    
                    </div>

                    <div>
                      <strong>Continent:</strong> {country.continents}
                    </div>

                    </div>
            </Link>
                    
                ))}
            </div>
        </div>
      </Layout>
      </div>
    );
}

export default Neighbours;
