import { useState } from "react";
import SideBar from "./sidebar";

const SideBarMbl = ({ hide, setHide }) => {
  return (
    <>
      <div className="flex">
        <div
          onClick={() => {
            setHide(!hide);
          }}
          className={` ${hide ? "hidden" : "block"} `}
        >
          <SideBar />
        </div>

        {/* <button
          onClick={() => {
            setHide(!hide);
          }}
          className="sm:ml-[4px] md:ml-[10px] !h-[20px]"
        >
          <div className="border-[1px] border-black w-[15px]  mb-[2.5px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px] mb-[3px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px]  sm:block lg:hidden"></div>
        </button> */}
      </div>
    </>
  );
};

export default SideBarMbl;
