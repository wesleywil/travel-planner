import { useState } from "react";
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
    <div className="w-1/2 flex flex-col items-center justify-center gap-2 bg-black/70 border rounded overflow-hidden">
      <div className="w-full flex flex-col bg-yellow-500">
        <div className="w-full px-2 flex justify-between ">
          <h1 className="self-center text-black font-bold text-xl">Info</h1>

          <button
            onClick={() => setHideMessage(!hideMessage)}
            className="my-1 px-1 bg-red-500 hover:bg-red-700 rounded"
          >
            Delete
          </button>
        </div>
        {hideMessage ? (
          ""
        ) : (
          <div className="self-center flex gap-2 text-black">
            <h2>Are you sure?</h2>
            <div>
              <button
                onClick={() => handleDeletePlan(data.id!)}
                className="hover:font-bold hover:text-red-800 transform duration-700 ease-in-out"
              >
                Yes
              </button>{" "}
              /{" "}
              <button
                onClick={() => setHideMessage(true)}
                className="hover:font-bold hover:text-blue-800 transform duration-700 ease-in-out"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-xl">
        {data.place} - {data.country}
      </h2>
      <img src={data.picture} alt="place" className="rounded-full" />

      <h2>{data.travel_date}</h2>
      <h1>{data.days} days</h1>
      <h3>{data.completed ? "Travel Plan Completed" : "To Be Completed"}</h3>
    </div>
  );
};

export default PlanDetails;
