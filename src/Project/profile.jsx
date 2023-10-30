import Layout from "./Layout/Layout";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:ml-[200px]">
          <div>
            <h1 className="sm:mx-4 mb-5 sm:text-xl lg:mt-[20px] lg:mb-[50px] font-bold text-2xl">
              Personal Information
            </h1>
          </div>
          <form>
            <label
              for="fname"
              className="sm:mx-4 sm:text-lg lg:text-xl font-bold"
            >
              First name:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value="Afaq"
              disabled
              className="sm:mx-4 md:ml-14 lg:ml-[40px] border border-black bg-white p-[5px] lg:w-[20.5vw]"
            />
            <br />
            <br />
            <label
              for="lname"
              className="sm:mx-4 sm:text-lg lg:text-xl font-bold"
            >
              Last name:
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value="Ahmad"
              disabled
              className="sm:mx-4 md:ml-[58px] lg:ml-[45px] border border-black bg-white p-[5px] lg:w-[20.5vw]"
            />
            <br />
            <br />
            <label
              for="fname"
              className="sm:mx-4 sm:text-lg lg:text-xl font-bold"
            >
              Email Adress:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value="afaq01ahmad@gmail.com"
              disabled
              className="sm:mx-4 md:ml-[36px] lg:ml-[22px] border border-black bg-white p-[5px] lg:w-[20.2vw]"
            />
            <br />
            <br />
            <label
              for="lname"
              className="sm:mx-4 sm:text-lg lg:text-xl font-bold"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value="03317378445"
              disabled
              className="sm:mx-4 lg:ml-0 border border-black bg-white p-[5px] lg:w-[20vw]"
            />
            <br />
            <br />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
