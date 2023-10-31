import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";

const PlanUpdate = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-1/2 flex flex-col items-center gap-2 bg-black/70 border rounded overflow-hidden">
      <div className="w-full px-2 flex justify-between bg-yellow-500">
        <h1 className="self-center text-black font-bold text-xl">Update</h1>
      </div>
      <form className="mt-2 flex flex-col gap-2 text-black font-semibold">
        <input
          type="text"
          name="place"
          placeholder="Place ex:Rome, Turim, Paris, Buenos Aires"
          className="px-2 py-1 rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country ex:Italy, France, Argentina"
          className="px-2 py-1 rounded"
        />
        <input type="date" name="travel_date" className="px-2 py-1 rounded" />

        <input
          type="number"
          name="days"
          placeholder="Number of days"
          className="px-2 py-1 rounded"
        />

        <div className="w-full flex gap-2 bg-white px-2 py-1 rounded">
          <input type="checkbox" name="completed" />
          <span className="text-gray-400">Already Did this plan?</span>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="px-2 py-1 bg-black hover:bg-slate-700 text-white font-semibold rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={() => dispatch(switchPlanDetailsHidden)}
            className="px-2 py-1 bg-black hover:bg-slate-700 text-white font-semibold rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanUpdate;
