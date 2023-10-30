import React, { useState } from "react";
import NavBar from "../navBar";
import SideBar from "../sidebar";
import SideBarMbl from "../sideBarMbl"

const Layout = ({ children }) => {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div>
        <NavBar hide={hide} setHide={setHide} />
        <div className="flex ">
          <div className="flex">
            <div className="sm:hidden lg:block">
              <SideBar />
            </div>
            <div className="sm:block lg:hidden">
              <SideBarMbl hide={hide} setHide={setHide} />
            </div>
            {children}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Layout;
