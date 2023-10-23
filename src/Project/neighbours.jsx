import React, { useState } from "react";
import SideBar from "./sidebar";
import NavBar from "./navBar";
import Layout from "./Layout/Layout";

const countries = [
  {
    name: "Pakistan",
    population: "231.4 million",
    continent: "Asia",
    neighbors: ["India", "Afghanistan", "China", "Iran"],
  },
  {
    name: "India",
    population: "1.408 billion",
    continent: "Asia",
    neighbors: [
      "Pakistan",
      "China",
      "Nepal",
      "Bhutan",
      "Bangladesh",
      "Myanmar",
    ],
  },
  {
    name: "China",
    population: "1.412 billion",
    continent: "Asia",
    neighbors: [
      "Korea",
      "Mongolia",
      "Russia",
      "Kazakhstan",
      "Kyrgyzstan",
      "Tajikistan",
      "Afghanistan",
      "Pakistan",
      "India",
      "Nepal",
      "Bhutan",
      "Myanmar",
      "Laos",
      "Vitenam",
    ],
  },
  {
    name: "Afghanistan",
    population: "40.1 million",
    continent: "Asia",
    neighbors: [
      "Pakistan",
      "Iran",
      "Turkmenistan",
      "Uzbekistan",
      "Tajikistan",
      "China",
    ],
  },
  {
    name: "Algeria",
    population: "44.18 million",
    continent: "Africa",
    neighbors: [
      "Tunisia",
      "Libya",
      "Niger ",
      "Mali",
      "Mauritania ",
      "Western Sahara",
      "Morocco",
    ],
  },
  {
    name: "Egypt",
    population: "109.3 million",
    continent: "Africa",
    neighbors: ["Libya ", "Sudan ", "Israel "],
  },
  {
    name: "Ethiopia",
    population: "120.3 million",
    continent: "Africa",
    neighbors: ["Eritrea, Somalia, Kenya, South Sudan, and Sudan"],
  },
  {
    name: "Libya",
    population: "6.735 million",
    continent: "Africa",
    neighbors: ["Egypt, Sudan, Niger, Chad, Tunisia and Algeria."],
  },
  {
    name: "Germany",
    population: "126 million",
    continent: "Europe",
    neighbors: [
      "Denmark in the north, Poland and the Czech Republic in the east, Switzerland (its only non-EU neighbor) and Austria in the south, France in the southwest and Belgium, Luxembourg and the Netherlands in the west.",
    ],
  },
  {
    name: "England",
    population: "55.98 million",
    continent: "Europe",
    neighbors: [
      "Belgium, Denmark, France, Germany, the Netherlands, Norway, and the Faroe Islands (Denmark).",
    ],
  },
  {
    name: "Holland",
    population: "17.53  million",
    continent: "Europe",
    neighbors: [
      " the North Sea to the north and west, Germany to the east, and Belgium to the south.",
    ],
  },
  {
    name: "France",
    population: "67.75  million",
    continent: "Europe",
    neighbors: [
      "In the north, it shares with Belgium, while Monaco, Spain and Andorra border France in the south. Luxembourg, Germany, Switzerland and Italy border France in the east.",
    ],
  },
  {
    name: "Australia",
    population: "25.69 million ",
    continent: "Australia",
    neighbors: [
      "Papua New Guinea (to the north) and New Zealand (to the east)",
    ],
  },
  {
    name: "New Zealand",
    population: "5.123 million",
    continent: "Australia",
    neighbors: [
      "American Samoa (United States), Australia, Fiji, French Polynesia (France), Kiribati, Samoa, and Tonga. ",
    ],
  },
  {
    name: "Tonga",
    population: "106,017",
    continent: "Australia",
    neighbors: [
      "Fiji and Wallis and Futuna (France) to the northwest, Samoa to the northeast, New Caledonia (France) and Vanuatu to the west, Niue (the nearest foreign territory) to the east, and Kermadec (New Zealand) to the southwest",
    ],
  },
  {
    name: "Fiji",
    population: "924,610",
    continent: "Australia",
    neighbors: ["Vanuatu, Tonga, and Samoa."],
  },
];

function Neighbours() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryData = countries.find(
    (country) => country.name === selectedCountry
  );

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="lg:ml-[170px]">
            <div>
              <h1 className="sm:ml-10 lg:ml-[50px] mt-[10px] sm:text-lg md:text-2xl font-bold">
                Information about Countries
              </h1>
            </div>
            <div className="sm:ml-10 lg:ml-[50px] sm:mt-0 lg:mt-40px lg:w-[50vw] p-[10px] ">
              <label className="m-[10px]">Select a country:</label>
              <select
                onChange={handleCountryChange}
                className="sm:m-2 lg:m-[20px] lg:p-[5px] border-2 sm:text-sm border-black"
              >
                <option value="" className="m-[20px] ">
                  -- Select a country --
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>

              {countryData && (
                <div className="lg:m-[20px] sm:text-[14px]">
                  <h2>{countryData.name}</h2>
                  <p className="text-justify">
                    Population: {countryData.population}
                  </p>
                  <p className="text-justify">
                    Continent: {countryData.continent}
                  </p>
                  <p className="text-justify">
                    Neighbors: {countryData.neighbors.join(", ") || "None"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Neighbours;
