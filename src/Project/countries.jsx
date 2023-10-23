import Layout from "./Layout/Layout";

const Countries = () => {
  return (
    <div>
      <Layout>
        <div className="md:ml-[12vw]">
          <h1 className="sm:ml-[10px] sm:text-lg  text-center mt-[5px] lg:mt-[20px] font-bold lg:text-2xl">
            Some Famous Countires Based on their Continent
          </h1>
          <div className=" lg:flex sm:flex-wrap text-center">
            <div className="sm:flex lg:flex-none sm:justify-around sm:mt-10 lg:mt-0">
              <ul className="list-none lg:mx-10">
                <li className="lg:mt-[30px]">
                  <h2 className="lg:text-2xl font-bold">Asia</h2>
                </li>
                <li className="lg:mt-[30px]">Pakistan</li>
                <li className="lg:mt-[30px]">India</li>
                <li className="lg:mt-[30px]">China</li>
                <li className="lg:mt-[30px]">Afghanistan</li>
                <li className="lg:mt-[30px]">Russia</li>
                <li className="lg:mt-[30px]">Nepal</li>
              </ul>
              <ul className="">
                <li className="lg:mt-[30px]">
                  <h2 className="lg:text-2xl font-bold">Africa</h2>
                </li>
                <li className="lg:mt-[30px]">Algeria</li>
                <li className="lg:mt-[30px]">Egypt </li>
                <li className="lg:mt-[30px]">Ethiopia</li>
                <li className="lg:mt-[30px]">Libya</li>
              </ul>
            </div>
            <div className="sm:flex lg:flex-none sm:justify-around sm:ml-5  lg:ml-0 sm:mt-8 lg:mt-0 ">
              <ul className="lg:mx-16">
                <li className="lg:mt-[30px]">
                  <h2 className="lg:text-2xl font-bold">Europe</h2>
                </li>
                <li className="lg:mt-[30px]">Germany</li>
                <li className="lg:mt-[30px]">England</li>
                <li className="lg:mt-[30px]">Holland</li>
                <li className="lg:mt-[30px]">France</li>
              </ul>
              <ul className=" sm:pl-14 lg:pl-0 ">
                <li className="lg:mt-[30px] ">
                  <h2 className="lg:text-2xl font-bold">Australia</h2>
                </li>
                <li className="lg:mt-[30px]">Australia</li>
                <li className="lg:mt-[30px]">New Zealand</li>
                <li className="lg:mt-[30px]">Tonga</li>
                <li className="lg:mt-[30px]">Fiji</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Countries;
