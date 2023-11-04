import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import type { AppDispatch, RootState } from "@/redux/store";
import { switchPlanDetailsHidden } from "@/redux/utils/utils";

import PlanDetails from "../plan_details/plan_details.component";
import PlanUpdate from "../plan_update/plan_update.component";
import PlanTodoList from "../plan_todo_list/plan_todo_list.component";
import TodoDetails from "../todo_details/todo_details.component";

const ProfilePlanDetails = () => {
  const plan = useSelector((state: RootState) => state.plans.plan);
  const hideTodoDetails = useSelector(
    (state: RootState) => state.utils.hideTodoDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-[#2c2d35]/70 z-30">
      <button
        onClick={() => dispatch(switchPlanDetailsHidden())}
        className="p-2 font-bold text-[#2c2d35] text-3xl bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-700 ease-in-out"
      >
        <FaTimes />
      </button>
      <h1 className="my-2 text-[#f7fbf9] text-2xl font-semibold">
        Profile Plan Details
      </h1>
      {hideTodoDetails ? (
        <div className="w-2/3 flex gap-4 justify-evenly">
          <PlanDetails data={plan} />
          <PlanUpdate data={plan} />
        </div>
      ) : (
        ""
      )}
      <PlanTodoList planId={plan.id!} />
      {!hideTodoDetails ? <TodoDetails /> : ""}
    </div>
  );
};

export default ProfilePlanDetails;
