import { Link } from "react-router-dom";
const NavBar = ({ hide, setHide }) => {
  return (
    <>
      <div className="bg-burlyWood  lg:h-24 w-screen">
        <ul className=" list-none">
          <li className="flex justify-between">
            <li className="flex">
              <img
                className="sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]  lg:w-[90px] lg:h-[90px] p-[10px] sm:ml-[-7px] sm:mt-[5px]  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAWv04UdeUuJVJBhOm811MstRLl4ZTFKxq07qloMCNNGAhh5DQSVWcDCdRcD45HZO_y0&usqp=CAU"
                alt="Logo"
              />
              <li className="sm:text-[12px]  sm:mt-[25px] sm: ml-[-7px] md:text-[18px] md:mt-[28px]  lg:text-[25px]  lg:mt-[33px] text-word">
                <Link to="/" className="hover:text-brown">
                  {" "}
                  Find Country Details{" "}
                </Link>
              </li>
            </li>
            <li className="w-30 flex sm:gap-1 md:gap-2">
              <li className=" sm:mt-[20px] sm:text-[12px] text-xl md:text-[18px] md:mt-[25px] lg:text-[25px] lg:mt-[38px] text-word ">
                <Link to="/about" className="hover:text-brown ">
                  About
                </Link>
              </li>
              <li className="sm:mt-[20px] sm:text-[12px] text-xl md:text-[18px] md:mt-[25px] lg:text-[25px] lg:mt-[38px] text-word ">
                <Link to="/contact" className="hover:text-brown">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/profiledetails">
                  <img
                    className="rounded-full sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] md:mt-[16px] lg:h-[60px] lg:w-[60px] lg:mt-[20px] sm:mt-[14px] sm:mr-1 md:mr-3 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkltmd_BJbbnsKJj2kLvP0spPct8zP24HIAjp9qo&s"
                  />
                </Link>
              </li>
            </li>
          </li>
        </ul>
        <button
          className="sm:ml-[4px] md:ml-[10px] !h-[20px]"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <div className="border-[1px] border-black w-[15px]  mb-[2.5px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px] mb-[3px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px]  sm:block lg:hidden"></div>
        </button>
      </div>
    </>
  );
};

export default NavBar;
