import { Route, Routes } from "react-router-dom";

import Profile from "./Project/Profile";
import Countries from "./Project/Countries";
import Neighbours from "./Project/Neighbours";
import About from "./Project/About";
import Contact from "./Project/Contact";

import { useState } from "react";
import HomePage from "./Project/Home";
import CountryDetail from "./Project/CountryDetails";

const Router = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="w-[100vw]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profiledetails" element={<Profile />} />
          <Route path="/countries">
            <Route index element={<Countries />} />
            <Route
              path="countriesdetails/:name/:id"
              element={<CountryDetail />}
            />
          </Route>
          <Route path="/neighbours">
            <Route index element={<Neighbours />} />
            <Route
              path="countriesdetails/:name/:id"
              element={<CountryDetail />}
            />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
