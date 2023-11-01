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
        <h1 className="sm:m-20 font-bold text-3xl">Coming soon.....</h1>
      
      </Layout>
      </div>
    );
}

export default Neighbours;
