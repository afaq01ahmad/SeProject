import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";

function Neighbours() {
  const [countries, setCountries] = useState([]);
  const [card, setCard] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = () => {
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCard(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }

  

  return (
    <div>
      <Layout>
        <h1 className="sm:ml-20 sm:mt-20 sm:mb-5 font-bold text-3xl">Neighbours List</h1>
        <div className="flex ml-20">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Country to look for its neighbours"
            className="border p-2 w-96"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white bg-black rounded" onClick={handleSearch? handleSearch:"Not Found"}>
            Search
          </button>
        </div>
        <div>
          <div className="sm:ml-0 md:ml-0 flex flex-wrap">
            {!card ? console.log("loading......") : card?.map((country, index) => (
              <div key={index} className="sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2 sm:w-[250px] md:w-[335px]">
                
                <div className="h-40 w-full">
                  <img src={country.flags.png} alt="" className="h-40 w-full" />
                </div>
                <div>
                  <strong>Name:</strong> {country.name.official} {country.flag}
                </div>
                <div>
                 <strong>Neighbours:</strong> {country.borders ? (
  <div>
                      
    {country.borders.map((borderCountry, index,) => (
    <Link to={`/countriesdetails/alpha/${borderCountry}`}> 
      <div key={index}>
        {borderCountry}
      </div>
                         </Link>
     
    ))}
  </div>
) : 'No data'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Neighbours;
