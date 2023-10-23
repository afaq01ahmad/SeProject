import SideBar from "./sidebar";
import NavBar from "./navBar";
import Layout from "./Layout/Layout";

const Countries = () => {
  return (
    <>
      <Layout>
        <div>
          <h1 className="sm:ml-[10px] sm:text-lg  text-center mt-[5px] lg:ml-[70px] lg:mt-[20px] font-bold lg:text-2xl">
            Some Famous Countires Based on their Continent
          </h1>
          <div>
            <div className="w-[80vw] lg:flex sm:flex-wrap  lg:justify-around">
              <div className="sm:flex lg:flex-none sm:justify-around sm:mt-10 lg:mt-0">
                <ul className="list-none lg:mx-20">
                  <li className="lg:mt-[40px]">
                    <h2 className="lg:text-2xl  font-bold">Asia</h2>
                  </li>
                  <li className="lg:mt-[40px]">Pakistan</li>
                  <li className="lg:mt-[40px]">India</li>
                  <li className="lg:mt-[40px]">China</li>
                  <li className="lg:mt-[40px]">Afghanistan</li>
                </ul>
                <ul className="">
                  <li className="lg:mt-[40px]">
                    <h2 className="lg:text-2xl font-bold">Africa</h2>
                  </li>
                  <li className="lg:mt-[40px]">Algeria</li>
                  <li className="lg:mt-[40px]">Egypt </li>
                  <li className="lg:mt-[40px]">Ethiopia</li>
                  <li className="lg:mt-[40px]">Libya</li>
                </ul>
              </div>
              <div className="sm:flex lg:flex-none sm:justify-around sm:ml-5  lg:ml-0 sm:mt-10 lg:mt-0 ">
                <ul className="lg:mx-16">
                  <li className="lg:mt-[40px]">
                    <h2 className="lg:text-2xl font-bold">Europe</h2>
                  </li>
                  <li className="lg:mt-[40px]">Germany</li>
                  <li className="lg:mt-[40px]">England</li>
                  <li className="lg:mt-[40px]">Holland</li>
                  <li className="lg:mt-[40px]">France</li>
                </ul>
                <ul className=" sm:pl-14 lg:pl-0 ">
                  <li className="lg:mt-[40px] ">
                    <h2 className="lg:text-2xl font-bold">Australia</h2>
                  </li>
                  <li className="lg:mt-[40px]">Australia</li>
                  <li className="lg:mt-[40px]">New Zealand</li>
                  <li className="lg:mt-[40px]">Tonga</li>
                  <li className="lg:mt-[40px]">Fiji</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Countries;
