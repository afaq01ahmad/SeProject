import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [hide, setHide] = useState(true);
  return (
    <div
      className={`sm:h-screen md:h-screen lg:h-full bg-sideBarColor`}
    >
      <div className={`lg:w-[14vw] lg:pl-[10px] sm:ml-0 text-xl`}>
        <Link to="/">
          <h4
            onClick={() => {
              setOpen(!open);
              setHide(!hide);
            }}
            className={` sm:text-[12px] lg:text-[20px] lg:block mt-[0] lg:mb-[10px] text-text lg:ml-[5px] sm:ml-[5px] hover:text-blue `}
          >
            Home
          </h4>
        </Link>
        <div>
          <Link to="/countries">
            <h4
              onClick={() => {
                setOpen(!open);
                setHide(!hide);
              }}
              className={` sm:text-[12px] lg:text-[20px] sm:leading-none  lg:block mt-[20px] text-text lg:ml-[5px] sm:ml-[5px] hover:text-blue `}
            >
              All Countries
            </h4>
          </Link>
        </div>
        <div>
          <Link to="/neighbours">
            <h4
              onClick={() => {
                setOpen(!open);
                setHide(!hide);
              }}
              className={` sm:text-[12px] lg:text-[20px] sm:leading-none lg:block mt-[20px]  text-text lg:ml-[5px] sm:ml-[5px] hover:text-blue  `}
            >
              Find Neighbours
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
