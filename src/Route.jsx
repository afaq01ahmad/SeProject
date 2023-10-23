import { Link, Route, Routes } from "react-router-dom";

import Profile from "./Project/profile";
import Countries from "./Project/countries";
import Neighbours from "./Project/neighbours";
import About from "./Project/about";
import Contact from "./Project/contact";

import { useState } from "react";
import Layout from "./Project/Layout/Layout";
import HomePage from "./Project/home";

const Router = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="w-[100vw]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/profiledetails" element={<Profile />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/neighbours" element={<Neighbours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
