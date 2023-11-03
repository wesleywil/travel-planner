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
    <div className="w-fit h-fit flex flex-col border rounded">
      <h1 className="bg-yellow-500 text-black text-center font-semibold">
        {data.task}
      </h1>
      <div className="flex flex-col">
        <div className="p-1 flex flex-col items-center">
          <h2>Due Date</h2>
          <h3 className="text-xs">{String(data.due_date)}</h3>
        </div>

        {data.completed ? (
          <div className="w-full bg-blue-500 text-center font-semibold">
            <button
              onClick={handleSelectTodo}
              className="text-black hover:text-white"
            >
              Details
            </button>
          </div>
        ) : (
          <div className="w-full bg-green-500 text-center font-semibold">
            <button
              onClick={handleSelectTodo}
              className="text-black hover:text-white"
            >
              Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
