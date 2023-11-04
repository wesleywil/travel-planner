import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
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
    dispatch(updateTodo({ id: todo.id!, data: todoData }));
    dispatch(switchTodoDetailsHidden());
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id!));
    dispatch(switchTodoDetailsHidden());
  };
  return (
    <div className="w-2/3 text-[#2c2d35] bg-[#2c2d35]/70 border rounded overflow-hidden">
      <div className="w-full px-1 flex bg-[#97c34f]">
        <h1 className="grow self-center text-center font-bold text-xl">
          To Do Details
        </h1>
        <button
          onClick={() => dispatch(switchTodoDetailsHidden())}
          className="self-center my-1 p-1 text-xl font-bold hover:text-[#f7fbf9] bg-[#f7fbf9] hover:bg-[#2c2d35] rounded-full transform duration-500 ease-in-out"
        >
          <FaTimes />
        </button>
      </div>
      <div className="p-2 flex flex-col items-center text-center text-[#f7fbf9]">
        <div className="w-full py-1 flex justify-between">
          <h1 className="grow ml-16 text-2xl font-bold">
            {plan.place} - {plan.country}
          </h1>
          <button
            onClick={handleDelete}
            className="self-center p-1 font-bold text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] rounded transform duration-500 ease-in-out"
          >
            <FaTrashAlt />
          </button>
        </div>

        <h2 className="w-full p-1 border-y">
          <span className="font-bold">Target Date:</span> {todo.due_date}
        </h2>
        <h2>
          <span className="font-bold">Task:</span> {todo.task}
        </h2>
        <div className="w-full flex flex-col p-1 border-y">
          <h2 className="font-bold">Description</h2>
          <p className="p-2">{todo.description}</p>
        </div>
        <h1 className="pb-2 text-xl">Completed?</h1>
        <div className="flex">
          <div className="self-center p-1 flex  border border-[#f7fbf9]">
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={handleUpdate}
              className="self-center w-6 h-6"
            />
          </div>

          {todo.completed ? (
            <h1 className="self-center p-1 font-bold text-[#2c2d35] bg-[#f7fbf9] border border-[#97c34f] rounded-r">
              DONE
            </h1>
          ) : (
            <h1 className="self-center p-1 font-bold text-[#2c2d35] bg-[#97c34f] border border-[#97c34f] rounded-r">
              TO DO
            </h1>
          )}
        </div>
        <div className="w-full p-1 border-b"></div>
      </div>
    </div>
  );
};

export default TodoDetails;
