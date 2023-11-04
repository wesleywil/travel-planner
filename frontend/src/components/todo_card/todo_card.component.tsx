import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { ToDo } from "@/utils/interfaces";
import { switchTodoDetailsHidden } from "@/redux/utils/utils";
import { selectTodo } from "@/redux/todos/todos";

const TodoCard = ({ data }: { data: ToDo }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectTodo = () => {
    dispatch(selectTodo(data.id!));
    dispatch(switchTodoDetailsHidden());
  };
  return (
    <div className="w-fit h-fit flex flex-col text-[#2c2d35] bg-[#f7fbf9] border border-[#97c34f] rounded overflow-hidden">
      <h1 className="bg-[#97c34f] text-center font-semibold">{data.task}</h1>
      <div className="flex flex-col">
        <div className="p-2 flex flex-col items-center">
          <h2 className="font-bold">Target Date</h2>
          <h3 className="text-xs">{String(data.due_date)}</h3>
        </div>

        {data.completed ? (
          <div className="w-full bg-blue-500 text-center font-semibold">
            <button onClick={handleSelectTodo} className=" hover:text-white">
              Details
            </button>
          </div>
        ) : (
          <div className="w-full text-center font-semibold hover:text-[#f7fbf9] bg-[#97c34f] hover:bg-[#2c2d35] border-t border-[#97c34f] transform duration-500 ease-in-out">
            <button onClick={handleSelectTodo}>Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
