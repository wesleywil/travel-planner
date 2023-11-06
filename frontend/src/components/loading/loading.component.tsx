import { FaRedoAlt } from "react-icons/fa";

const Loading = () => {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center z-0">
      <div className="animate-spin text-8xl font-bold text-[#97c34f]">
        <FaRedoAlt />
      </div>
      <h1 className="mt-4 text-4xl font-bold text-[#97c34f]">Loading</h1>
    </main>
  );
};

export default Loading;
