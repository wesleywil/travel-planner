import { AppDispatch } from "@/redux/store";
import { createTodo } from "@/redux/todos/todos";
import { useDispatch } from "react-redux";

const TodoForm = ({ planId }: { planId: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const completed = data.get("completed") === "on";

    const postData = {
      plan: planId,
      task: data.get("task") as string,
      description: data.get("description") as string,
      due_date: data.get("due_date") as string,
      completed: completed,
    };
    dispatch(createTodo({ planId: planId, data: postData }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full p-2 flex flex-col gap-2 text-black font-semibold"
    >
      <input
        type="text"
        name="task"
        placeholder="Task ex:Eat, Visit"
        className="px-2 py-1 rounded"
      />
      <textarea
        name="description"
        placeholder="describe the task that you will be performing"
        rows={5}
        className="px-2 py-1 rounded"
      ></textarea>
      <input type="date" name="due_date" className="px-2 py-1 rounded" />
      <div className="w-full flex gap-2 bg-white px-2 py-1 rounded">
        <input
          type="checkbox"
          name="completed"
          className="self-center w-4 h-4"
        />
        <span className="text-gray-400">Already Did this Task?</span>
      </div>
      <div className="flex gap-4 justify-center">
        <button className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded">
          Submit
        </button>
        <button
          type="button"
          className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
