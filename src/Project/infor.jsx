import React from "react";
import NavBar from "./navBar";

const CountryInfo = ({ country }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <h2>Country Information</h2>
      <p>Country: {country.name}</p>
      <p>Population: {country.population}</p>
      <p>Continent: {country.region}</p>
      <p>Neighbours: {country.borders.join(", ")}</p>
    </div>
  );
};

export default CountryInfo;
