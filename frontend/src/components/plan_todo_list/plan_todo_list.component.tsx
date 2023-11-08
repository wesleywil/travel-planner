import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchTodos } from "@/redux/todos/todos";
import { switchTodoFormHidden } from "@/redux/utils/utils";

import TodoList from "../todo_list/todo_list.component";
import TodoForm from "../todo_form/todo_form.component";

const PlanTodoList = ({ planId }: { planId: number }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const status = useSelector((state: RootState) => state.todos.status);
  const hidePlanDetails = useSelector(
    (state: RootState) => state.utils.hidePlanDetails
  );
  const hideTodoForm = useSelector(
    (state: RootState) => state.utils.hideTodoForm
  );
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTodos(planId));
    setIsLoading(false);
  }, [hidePlanDetails]);

  useEffect(() => {
    if (
      status === "todo created" ||
      status === "todo updated" ||
      status === "todo deleted"
    ) {
      dispatch(fetchTodos(planId));
      setIsLoading(false);
    }
  }, [status]);
  if (isLoading) return <p>loading...</p>;
  if (!todos) return <p>No Plans Data</p>;
  return (
    <div className="w-2/3 min-h-[20rem] my-2 flex flex-col text-[#2c2d35] bg-[#2c2d35]/70 border border-[#f7fbf9] rounded overflow-hidden">
      <div className="w-full px-1 flex justify-between bg-[#97c34f]">
        <button
          onClick={() => dispatch(switchTodoFormHidden())}
          className="p-1 my-2 text-2xl font-bold hover:text-[#f7fbf9] bg-[#f7fbf9] hover:bg-[#2c2d35] rounded-full transform duration-500 ease-in-out"
        >
          <FaPlus />
        </button>
        <h1 className="self-center font-bold text-xl">To Do List</h1>
        <div className="px-1 font-semibold">
          <div className="flex gap-1 items-center">
            <span className="w-12 text-right">To Do</span>
            <div className="w-4 h-4 bg-[#97c34f] border border-[#2c2d35]"></div>
          </div>
          <div className="flex gap-1 items-center">
            <span className="w-12 text-right">Done</span>
            <div className="w-4 h-4 bg-[#f7fbf9] border border-[#2c2d35]"></div>
          </div>
        </div>
      </div>
      {hideTodoForm ? <TodoList todos={todos} /> : <TodoForm planId={planId} />}
    </div>
  );
};

export default PlanTodoList;
