import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
import { COUNTRIES, COUNTRIESDETAILS } from "./Links";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        const data = await response.json();
        const firstTwentyCountries = data.slice(0, 20);
        setCountries(firstTwentyCountries);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <Layout>
        <div className="lg:ml-16 xl:ml-0">
          <h1 className="sm:m-0 font-bold text-3xl">List of Countries</h1>
          <div className="sm:p-2 md:p-3 sm:mt-2 md:m-2 md:ml-[40%] sm:ml-6">
            {isLoading ? "Loading........" : ""}
          </div>
          <div className="sm:ml-0 md:ml-0 flex flex-wrap">
            {countries.map((country, index) => (
              <Link
                to={`${COUNTRIES}${COUNTRIESDETAILS(country.name.official)}`}
              >
                <div
                  key={index}
                  className="border border-black sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2 sm:w-[250px] md:w-[335px]"
                >
                  <div className="h-40 w-full">
                    <img
                      src={country.flags.png}
                      alt=""
                      className="h-40 w-full"
                    />
                  </div>
                  <div>
                    <strong>Name:</strong> {country.name.official}{" "}
                    {country.flag}
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

export default Countries;
