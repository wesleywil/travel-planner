import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";
import { selectPlan } from "@/redux/plans/plans";
import { Plans } from "@/utils/interfaces";

const ProfileTravelsPlanCard = ({ data }: { data: Plans }) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectPlanById = (id: number) => {
    dispatch(selectPlan(id));
    dispatch(switchPlanDetailsHidden());
  };
  return (
    <div className="w-60 h-72 flex flex-col justify-between text-[#2c2d35] bg-[#f7fbf9] border border-[#97c34f] rounded-xl overflow-hidden shadow">
      <h2
        style={
          data.completed
            ? {
                backgroundColor: "#2c2d35",
                color: "#97c34f",
                borderBottom: "1px solid #97c34f",
              }
            : { backgroundColor: "#97c34f" }
        }
        className="w-full font-semibold text-xl text-center"
      >
        {data.place} - {data.country}
      </h2>
      <div className="p-2 flex flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: `url(${data.picture!})`,
            backgroundSize: "contain",
          }}
          className="w-40 h-40 flex flex-col items-center justify-center rounded-full border-2 border-[#2c2d35] "
        >
          <div
            style={{ backdropFilter: "blur(1px)" }}
            className="w-40 h-40 flex flex-col items-center justify-center text-[#f7fbf9] bg-[#2c2d35]/70 rounded-full"
          >
            <h3>{data.travel_date}</h3>
            <h1 className="text-3xl font-bold">{data.days} days</h1>
          </div>
        </div>
      </div>
      {data.completed ? (
        <button
          onClick={() => {
            selectPlanById(data.id!);
          }}
          className="w-full px-2 py-1 text-[#97c34f] hover:text-[#2c2d35] hover:font-semibold bg-[#2c2d35] hover:bg-[#f7fbf9] border-t border-[#97c34f] hover:border-[#2c2d35] rounded-b transform duration-500 ease-in-out"
        >
          Details
        </button>
      ) : (
        <button
          onClick={() => {
            selectPlanById(data.id!);
          }}
          className="w-full px-2 py-1 hover:text-[#f7fbf9] bg-[#97c34f] hover:bg-[#2c2d35] border-t border-[#97c34f] rounded-b transform duration-500 ease-in-out"
        >
          Details
        </button>
      )}
    </div>
  );
};

export default ProfileTravelsPlanCard;
