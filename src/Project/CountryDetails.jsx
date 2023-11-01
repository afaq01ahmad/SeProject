import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link, useParams } from "react-router-dom";



const CountryDetail = () => {
  const { id,name } = useParams();
  
  const [countries, setCountries] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const fetchCountries = () => {
        fetch(`https://restcountries.com/v3.1/${name}/${id}/`)
            .then((res) => {
              if (res.ok) {
                    return res.json();
                }
            })
          .then((data) => {
              setCountries(data);
              setIsLoading(false); 
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
              setIsLoading(false); 
            });
    }
    useEffect(() => {
      fetchCountries();
    }, []);
 

    return (
        <>
        <Layout>
          <Link to="/countries">
            <img src="data:image/png;base64,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" alt=""  className="w-12 h-12 m-6"/>
          </Link>
          <div className="flex flex-warp">
            <div className="sm:p-2 md:p-3 sm:mt-2 md:m-2 md:ml-[10vw] lg:mt-[1vh] sm:ml-6">
              {isLoading?'Loading........':""}
            </div>
            {countries.map((country, key) => (
              <div>
              <div key={country.name.official} className="sm:p-2 md:p-3 sm:mt-2 md:m-2 md: lg: sm:ml-6 sm:w-[80vw] md:w-[50vw] lg:w-[20vw]">
                
                      <img src={country.flags.png} alt="" className="h-40 w-full"/>
                    <br />
               
                  <strong>Name:</strong> {country.name.common ? country.name.common : 'No data'}
                    <br />
                  <strong>Official Name:</strong> {country.name.official ? country.name.official: 'No data'}
                    <br />
                      <strong>Continent:</strong> {country.continents ? country.continents: 'No data'}
                    <br />
                      <strong>Capital:</strong> {country.capital ? country.capital : 'No data'}
                    <br />
                      <strong>Currencies:</strong> {country.currencies ? country.currencies && Object.values(country.currencies).map(currency => currency.name).join(", "): 'No data'}
                    <div className="break-all">
                      <strong>Location:</strong> {country.maps ? country.maps && country.maps.googleMaps: 'No data'}
                    </div>
                      <strong>Languages:</strong> {country.languages ? country.languages && Object.values(country.languages).map(Object).join(", "): 'No data'}
                  <br />
                    
                  <strong>Region:</strong> {country.region ? country.region : 'No data'}
                  <br />
                  
                  <strong>Sub Region:</strong> {country.subregion ? country.subregion : 'No data'}
                  <br />
                  <strong>Neighbours:</strong> {country.borders ? country.borders.join(", "):'No data'}
                  <br />
                  <strong>Area:</strong> {country.area ? country.area : 'No data'}
                  <br />
                   <strong>Population:</strong> {country.population ? country.population : 'No data'}
                  <br />
                  <strong>Time Zones:</strong> {country.timezones ? country.timezones : 'No data'}
                </div>
                </div>
                ))}
            </div>


<Link to="/neighbours">
            <img src="data:image/png;base64,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" alt=""  className="w-12 h-12 m-6"/>
          </Link>


            </Layout>
        </>
    );
}

export default CountryDetail
