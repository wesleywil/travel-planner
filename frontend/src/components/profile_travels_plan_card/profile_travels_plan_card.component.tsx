import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";
import { selectPlan } from "@/redux/plans/plans";

type ProfileTravelsPlanCardProps = {
  id: number;
  place: string;
  country: string;
  travel_date: string;
  days: number;
};

const ProfileTravelsPlanCard = ({
  id,
  place,
  country,
  travel_date,
  days,
}: ProfileTravelsPlanCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectPlanById = (id: number) => {
    dispatch(selectPlan(id));
    dispatch(switchPlanDetailsHidden());
  };
  return (
    <div className="w-60 h-72 flex flex-col justify-between text-[#2c2d35] bg-[#f7fbf9] border border-[#97c34f] rounded-xl overflow-hidden">
      <h2 className="w-full font-semibold text-xl text-center bg-[#97c34f]">
        {place} - {country}
      </h2>
      <div className="p-2 flex flex-col items-center justify-center">
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-full border-2 border-[#2c2d35]">
          <h3>{travel_date}</h3>
          <h1 className="text-3xl font-bold">{days} days</h1>
        </div>
      </div>
      <button
        onClick={() => {
          selectPlanById(id);
        }}
        className="w-full px-2 py-1 hover:text-[#f7fbf9] bg-[#97c34f] hover:bg-[#2c2d35] border-t border-[#97c34f] rounded-b transform duration-500 ease-in-out"
      >
        Details
      </button>
    </div>
  );
};

export default ProfileTravelsPlanCard;
