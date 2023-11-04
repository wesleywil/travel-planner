import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
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
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-[#2c2d35]/70 z-30">
      <button
        onClick={() => dispatch(switchFormHidden())}
        className="p-2 font-bold text-[#2c2d35] text-3xl bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-500 ease-in-out"
      >
        <FaTimes />
      </button>
      <form
        onSubmit={handleSubmit}
        className="md:w-2/3 xl:w-2/5 mt-4 p-4 flex flex-col gap-2 text-black font-semibold border border-[#97c34f] rounded"
      >
        <input
          type="text"
          name="place"
          placeholder="Place ex:Rome, Turim, Paris, Buenos Aires"
          className="px-2 py-1 outline-0 rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country ex:Italy, France, Argentina"
          className="px-2 py-1 outline-0 rounded"
        />
        <input
          type="date"
          name="travel_date"
          className="px-2 py-1 outline-0 rounded"
        />

        <input
          type="number"
          name="days"
          placeholder="Number of days"
          className="px-2 py-1 outline-0 rounded"
        />

        <div className="w-full flex gap-2 bg-white px-2 py-1 rounded">
          <input
            type="checkbox"
            name="completed"
            className="self-center w-4 h-4"
          />
          <span className="text-gray-400">Already Did this plan?</span>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={() => dispatch(switchFormHidden())}
            className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePlanForm;
