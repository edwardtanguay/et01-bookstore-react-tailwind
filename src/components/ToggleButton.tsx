import { useContext } from "react";
import { ActiveContext } from "../context/context";


const ToggleButton = () => {
  const {isActive,setIsActive}=useContext(ActiveContext)
  const handleSetActive = () => {
    setIsActive(!isActive);

  };
  return (
    <div
      className={`duration-200 transition ease-in-out w-12 h-6 rounded-full flex items-center ${
        isActive ? " bg-white" : " bg-slate-800"
      } border-2 border-PURPLE cursor-pointer`}
      onClick={handleSetActive}
    >
      <span
        className={`shadow-inner duration-200 transition ease-in-out  w-4 h-4 flex rounded-full mx-1 cursor-pointer ${
          isActive
            ? " translate-x-5   bg-slate-800"
            : " bg-white"
        }`}
      ></span>
    </div>
  );
};

export default ToggleButton;
