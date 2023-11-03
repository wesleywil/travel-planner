import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { switchTodoDetailsHidden } from "@/redux/utils/utils";
import { updateTodo, deleteTodo } from "@/redux/todos/todos";
import { ToDo } from "@/utils/interfaces";

const TodoDetails = () => {
  const todo = useSelector((state: RootState) => state.todos.todo);
  const plan = useSelector((state: RootState) => state.plans.plan);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = async (event: ChangeEvent<HTMLInputElement>) => {
    const todoData: ToDo = {
      ...todo,
      completed: event.target.checked,
    };
    //console.log("UPDATE DATA=>", todoData);
    dispatch(updateTodo({ id: todo.id!, data: todoData }));
    dispatch(switchTodoDetailsHidden());
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id!));
    dispatch(switchTodoDetailsHidden());
  };
  return (
    <div className="w-2/3 bg-black/70 border rounded overflow-hidden">
      <div className="w-full px-1 flex bg-yellow-500">
        <h1 className="grow self-center text-center text-black font-bold text-xl bg-yellow-500">
          To Do Details
        </h1>
        <button
          onClick={() => dispatch(switchTodoDetailsHidden())}
          className="self-center  my-1 px-2 text-2xl font-bold bg-red-500 hover:bg-red-700 rounded-full"
        >
          X
        </button>
      </div>
      <div className="p-2 flex flex-col items-center text-center">
        <div className="w-full flex justify-between">
          <h1 className="grow ml-16 text-2xl font-bold">
            {plan.place} - {plan.country}
          </h1>
          <button
            onClick={handleDelete}
            className="self-center my-1 px-2 font-bold bg-red-500 hover:bg-red-700 rounded"
          >
            Delete
          </button>
        </div>

        <h2 className="w-full p-1 border-y">Activity Date: {todo.due_date}</h2>
        <h2>Task: {todo.task}</h2>
        <div className="w-full flex flex-col p-1 border-y">
          <h2>Description</h2>
          <p>{todo.description}</p>
        </div>
        <h1>Completed?</h1>
        <div className="flex">
          <div className="self-center p-1 flex  border">
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={handleUpdate}
              className="self-center w-6 h-6"
            />
          </div>

          {todo.completed ? (
            <h1 className="p-1 bg-blue-500 rounded-r">DONE</h1>
          ) : (
            <h1 className="p-1 bg-green-500 rounded-r">TO DO</h1>
          )}
        </div>
        <div className="w-full p-1 border-b"></div>
      </div>
    </div>
  );
};

export default TodoDetails;
