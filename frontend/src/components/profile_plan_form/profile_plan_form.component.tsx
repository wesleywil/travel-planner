import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchFormHidden } from "@/redux/utils/utils";

const ProfilePlanForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const completed = data.get("completed") === "on"; // Check if the checkbox is checked

    const postData = {
      user: 1, // To be changed later, needs to get the ID from the logged-in user
      place: data.get("place"),
      country: data.get("country"),
      travel_date: data.get("travel_date"),
      days: data.get("days"),
      completed: completed,
    };
    const req = await fetch("http://localhost:8000/api/plans/", {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify(postData),
    });
    console.log("RESPONSE FROM REQUEST ", await req.json());
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
