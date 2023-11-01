import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchFormHidden } from "@/redux/utils/utils";
import { createPlan } from "@/redux/plans/plans";

const ProfilePlanForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const completed = data.get("completed") === "on"; // Check if the checkbox is checked

    const postData = {
      user: 1, // To be changed later, needs to get the ID from the logged-in user
      place: data.get("place") as string,
      country: data.get("country") as string,
      travel_date: data.get("travel_date") as string,
      days: parseInt(data.get("days") as string),
      completed: completed,
    };
    dispatch(createPlan(postData));
    dispatch(switchFormHidden());
  };
  return (
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-gray-600/70 z-30">
      <button
        onClick={() => dispatch(switchFormHidden())}
        className="px-2 font-bold text-3xl bg-red-600 hover:bg-red-800 rounded-full"
      >
        X
      </button>
      <form
        onSubmit={handleSubmit}
        className="w-2/5 mt-4 p-2 flex flex-col gap-2 text-black font-semibold border rounded"
      >
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
            onClick={() => dispatch(switchFormHidden())}
            className="px-2 py-1 bg-black hover:bg-slate-700 text-white font-semibold rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePlanForm;
