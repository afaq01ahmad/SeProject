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
      </div>
    </>
  );
};

export default SideBarMbl;
