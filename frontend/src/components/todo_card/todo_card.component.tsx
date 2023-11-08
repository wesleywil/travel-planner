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
    <div
      style={
        data.completed
          ? { border: "1px solid #3b82f6" }
          : { border: "1px solid #97c34f" }
      }
      className="w-fit h-fit flex flex-col text-[#2c2d35] bg-[#f7fbf9] border border-[#97c34f] rounded overflow-hidden"
    >
      <h1
        style={
          data.completed
            ? { backgroundColor: "#3b82f6" }
            : { backgroundColor: "#97c34f" }
        }
        className="text-center font-semibold"
      >
        <span className={data.task.length > 15 ? "text-sm" : ""}>
          {data.task}
        </span>
      </h1>
      <div className="flex flex-col">
        <div className="p-2 flex flex-col items-center">
          <h2 className="font-bold">Target Date</h2>
          <h3 className="text-xs">{String(data.due_date)}</h3>
        </div>
        <div
          style={
            data.completed
              ? { backgroundColor: "#3b82f6" }
              : { backgroundColor: "#97c34f" }
          }
          className="w-full text-center font-semibold"
        >
          <button onClick={handleSelectTodo} className=" hover:text-white">
            Details
          </button>
        </div>
        {/* {data.completed ? (
          <div className="w-full bg-blue-500 text-center font-semibold">
            <button onClick={handleSelectTodo} className=" hover:text-white">
              Details
            </button>
          </div>
        ) : (
          <div className="w-full text-center font-semibold hover:text-[#f7fbf9] bg-[#97c34f] hover:bg-[#2c2d35] border-t border-[#97c34f] transform duration-500 ease-in-out">
            <button onClick={handleSelectTodo}>Details</button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TodoCard;
