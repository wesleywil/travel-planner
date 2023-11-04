import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { deletePlan } from "@/redux/plans/plans";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";
import { Plans } from "@/utils/interfaces";

const PlanDetails = ({ data }: { data: Plans }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [hideMessage, setHideMessage] = useState(true);

  const handleDeletePlan = (id: number) => {
    dispatch(deletePlan(id));
    dispatch(switchPlanDetailsHidden());
  };
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-2 text-[#2c2d35] bg-[#2c2d35]/70 border border-[#f7fbf9] rounded overflow-hidden">
      <div className="w-full flex flex-col bg-[#97c34f]">
        <div className="w-full px-2 flex justify-between ">
          <h1 className="self-center font-bold text-xl">Info</h1>

          <button
            onClick={() => setHideMessage(!hideMessage)}
            className="my-1 p-1 hover:text-[#f7fbf9] bg-[#f7fbf9] hover:bg-[#2c2d35] rounded"
          >
            <FaTrashAlt />
          </button>
        </div>
        {hideMessage ? (
          ""
        ) : (
          <div className="self-center flex gap-2 font-bold">
            <h2>Are you sure?</h2>
            <div>
              <button
                onClick={() => handleDeletePlan(data.id!)}
                className="hover:font-bold hover:text-[#f7fbf9] transform duration-700 ease-in-out"
              >
                Yes
              </button>{" "}
              /{" "}
              <button
                onClick={() => setHideMessage(true)}
                className="hover:font-bold hover:text-[#f7fbf9] transform duration-700 ease-in-out"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-xl text-[#f7fbf9]">
        {data.place} - {data.country}
      </h2>
      <img src={data.picture} alt="place" className="rounded-full" />
      <div className="py-2 flex flex-col gap-1 items-center text-[#f7fbf9]">
        <h2>Travel In {data.travel_date}</h2>
        <h1> {data.days} days</h1>
        <h3
          className={`px-2 font-bold text-[#2c2d35]  ${
            data.completed ? "bg-[#f7fbf9]" : "bg-[#97c34f]"
          }`}
        >
          {data.completed ? "Adventure Completed" : "The Adventure Awaits"}
        </h3>
      </div>
    </div>
  );
};

export default PlanDetails;
