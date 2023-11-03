import { useDispatch, useSelector } from "react-redux";
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
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-gray-600/70 z-30">
      <button
        onClick={() => dispatch(switchPlanDetailsHidden())}
        className="px-2 font-bold text-3xl bg-red-600 hover:bg-red-800 rounded-full"
      >
        X
      </button>
      <h1 className="my-2 text-2xl font-semibold">Profile Plan Details</h1>
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
