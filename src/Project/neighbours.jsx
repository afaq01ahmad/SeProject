import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";


function Neighbours() {
   const [countries, setCountries] = useState([]);
  const fetching = () => {
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
      fetching();
    }, []);

  return (
    <Layout>
        <div className="ml-6 sm:overflow-y-scroll">
            <h1 className="sm:m-0 font-bold text-3xl">List of Countries</h1>
            <div className="flex flex-wrap">
                {countries.map((country, index) => (
                    <div key={index} className="border border-black sm:p-2 md:p-3 sm:m-0 md:m-2 sm:w-[180px] md:w-[335px]">
                        <div>
                            <strong>Name:</strong> {country.name.official} {country.flag}
                        </div>
                         <div>
                            <strong>Capital:</strong> {country.capital}
                        </div>
                        <div>
                            <strong>Continent:</strong> {country.continents}
                        </div>
                        <div>
                            <strong>Currencies:</strong> {country.currencies && Object.values(country.currencies).map(currency => currency.name).join(", ")}
                        </div>
                        <div className="break-all">
                            <strong>Location:</strong> {country.maps && country.maps.googleMaps}
                        </div>
                        <div>
                            <strong>Neighbours:</strong> {country.borders && country.borders.join(", ")}
                        </div>
                    </div>
                ))}
            </div>
      </div>
      </Layout>
    );
}

export default Neighbours;
