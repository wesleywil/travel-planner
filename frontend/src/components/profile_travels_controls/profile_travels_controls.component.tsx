import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import type { AppDispatch } from "@/redux/store";
import { switchFormHidden } from "@/redux/utils/utils";
import { filterCompleted, resetFilter } from "@/redux/plans/plans";

const ProfileTravelsControls = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full px-2 py-1 flex justify-between">
      <button
        onClick={() => dispatch(switchFormHidden())}
        className="p-2 text-[#2c2d35] text-xl font-bold bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-500 ease-in-out"
      >
        <FaPlus />
      </button>
      <div className=" flex gap-2 text-[#2c2d35] font-semibold">
        <button
          onClick={() => dispatch(resetFilter())}
          className="px-2 py-1 bg-[#f7fbf9] hover:bg-[#f7fbf9]/70 rounded transform duration-500 ease-in-out"
        >
          Plans
        </button>
        <button
          onClick={() => dispatch(filterCompleted(false))}
          className="px-2 py-1 bg-[#97c34f] hover:bg-[#97c34f]/70 rounded transform duration-500 ease-in-out"
        >
          Not Visited
        </button>
        <button
          onClick={() => dispatch(filterCompleted(true))}
          className="px-2 py-1 text-[#97c34f] hover:text-[#f7fbf9] border border-[#97c34f] hover:border-[#f7fbf9] rounded transform duration-500 ease-in-out"
        >
          Visited
        </button>
      </div>
    </div>
  );
};

export default ProfileTravelsControls;
