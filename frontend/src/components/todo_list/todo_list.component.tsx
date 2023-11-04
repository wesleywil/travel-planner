import { ToDo } from "@/utils/interfaces";
import TodoCard from "../todo_card/todo_card.component";

const TodoList = ({ todos }: { todos: ToDo[] }) => {
  return (
    <>
      {todos.length ? (
        <div className="w-full h-full p-2 flex gap-2 flex-wrap">
          {todos.map((item) => (
            <TodoCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[15rem] p-2 flex flex-wrap justify-center items-center">
          <h1 className="self-center text-[#f7fbf9] text-center text-2xl font-bold ">
            EMPTY TO DO LIST
          </h1>
        </div>
      )}
    </>
  );
};

export default TodoList;
