import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";

function Neighbours() {
  const [countries, setCountries] = useState([]);
  const [neighbour, setNeighbour] = useState([]);
  const [card, setCard] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const arrayFunction = (countryNeighbors) => {
    if (countryNeighbors) {
      return countryNeighbors;
    }
    return null;
  };

  const handleSearch = () => {
    setNeighbour([]);
    setCard(null);
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCard(data);
        setIsLoading(false);

        const arrayData = arrayFunction(data?.[0]?.borders);

        for (let j = 0; j < arrayData.length; j++) {
          if (arrayData[j]) {
            fetch(`https://restcountries.com/v3.1/alpha/${arrayData[j]}`)
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
              })
              .then((data) => {
                setNeighbour((prevNeighbour) => [...prevNeighbour, data]);
              })
              .catch((error) => {
                console.error("Error fetching neighbor data:", error);
              });
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };
  const mapNeighbours = () => {
    return (
      <div className="sm:ml-0 md:ml-0 flex flex-wrap">
        {neighbour.map((one, idx) => (
          <div key={idx}>
            {one.map((country, index) => (
              <div
                key={index}
                className="sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2 sm:w-[250px] md:w-[335px]"
              >
                <Link
                  to={`/neighbours/countriesdetails/name/${country.name.official}`}
                >
                  <div className="h-40 w-full">
                    <img
                      src={country.flags.png}
                      alt=""
                      className="h-40 w-full"
                    />
                  </div>
                  <div>
                    <strong>Name:</strong> {country.name.official}
                    {country.flag}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <h1 className="sm:ml-6 sm:mt-20 sm:mb-5 font-bold text-3xl">
          Neighbours List
        </h1>
        <div className="sm:ml-2 md:ml-20 mb-5">
          Please Enter Country's Official Name
        </div>

        <div className="flex flex-wrap sm:ml-2 md:ml-20">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Country to look for its neighbours"
            className="border p-2 sm:w-50 md:w-96 mb-5"
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 mb-5 text-white bg-black rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex">
          <div className="sm:ml-0 md:ml-0 flex flex-wrap">
            {!card ? (
              <div className="ml-20">loading......</div>
            ) : (
              card?.map((country, index) => (
                <div
                  key={index}
                  className="sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2"
                ></div>
              ))
            )}
          </div>

          {mapNeighbours()}
        </div>
      </Layout>
    </div>
  );
}

export default Neighbours;
