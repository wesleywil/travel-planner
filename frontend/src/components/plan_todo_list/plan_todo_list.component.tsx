import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchTodos } from "@/redux/todos/todos";
import TodoList from "../todo_list/todo_list.component";
import TodoForm from "../todo_form/todo_form.component";

const PlanTodoList = ({ planId }: { planId: number }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const status = useSelector((state: RootState) => state.todos.status);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(true);
  const [formHidden, setFormHidden] = useState(true);

  useEffect(() => {
    if (
      status === "idle" ||
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
    <div className="w-2/3 min-h-[20rem] my-2 flex flex-col bg-black/70 border rounded overflow-hidden">
      <div className="w-full px-1 flex justify-between bg-yellow-500">
        <button
          onClick={() => setFormHidden(!formHidden)}
          className="px-2 my-2 text-2xl font-bold bg-red-500 hover:bg-red-700 rounded-full"
        >
          +
        </button>
        <h1 className="self-center text-black font-bold text-xl">To Do List</h1>
        <div className="px-1 text-black">
          <div className="flex gap-1 items-center">
            <span className="w-12 text-right">To Do</span>
            <div className="w-4 h-4 bg-green-500"></div>
          </div>
          <div className="flex gap-1 items-center">
            <span className="w-12 text-right">Done</span>
            <div className="w-4 h-4 bg-blue-500"></div>
          </div>
        </div>
      </div>
      {formHidden ? <TodoList todos={todos} /> : <TodoForm planId={planId} />}
    </div>
  );
};

export default PlanTodoList;
