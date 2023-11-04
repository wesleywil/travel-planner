import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";
import { Plans } from "@/utils/interfaces";
import { updatePlan } from "@/redux/plans/plans";

const PlanUpdate = ({ data }: { data: Plans }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const dataForm = new FormData(form);
    const completed = dataForm.get("completed") === "on"; // Check if the checkbox is checked

    const postData = {
      user: 1, // To be changed later, needs to get the ID from the logged-in user
      place: dataForm.get("place") as string,
      country: dataForm.get("country") as string,
      travel_date: dataForm.get("travel_date") as string,
      days: parseInt(dataForm.get("days") as string),
      completed: completed,
    };
    dispatch(updatePlan({ id: data.id!, data: postData }));
    dispatch(switchPlanDetailsHidden());
  };

  return (
    <div className="w-1/2 flex flex-col items-center gap-2 text-[#2c2d35] bg-[#2c2d35]/70 border border-[#f7fbf9] rounded overflow-hidden">
      <div className="w-full min-h-[2rem] px-2 flex justify-between bg-[#97c34f]">
        <h1 className="self-center font-bold text-xl">Update</h1>
      </div>
      <form
        onSubmit={handleUpdate}
        className="w-2/3 mt-2 flex flex-col gap-2 text-black font-semibold"
      >
        <input
          type="text"
          name="place"
          defaultValue={data.place}
          placeholder="Place ex:Rome, Turim, Paris, Buenos Aires"
          className="px-2 py-1 rounded"
        />
        <input
          type="text"
          name="country"
          defaultValue={data.country}
          placeholder="Country ex:Italy, France, Argentina"
          className="px-2 py-1 rounded"
        />
        <input
          type="date"
          name="travel_date"
          defaultValue={data.travel_date}
          className="px-2 py-1 rounded"
        />

        <input
          type="number"
          name="days"
          defaultValue={data.days}
          placeholder="Number of days"
          className="px-2 py-1 rounded"
        />

        <div className="w-full flex gap-2 bg-white px-2 py-1 rounded">
          <input
            type="checkbox"
            name="completed"
            defaultChecked={data.completed}
            className="self-center w-4 h-4"
          />
          <span className="text-gray-400">Already Did this plan?</span>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded transform duration-500 ease-in-out">
            Update
          </button>
          <button
            type="button"
            onClick={() => dispatch(switchPlanDetailsHidden())}
            className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded transform duration-500 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanUpdate;
