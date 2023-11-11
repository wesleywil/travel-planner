import { FaTimes } from "react-icons/fa";

const ButtonClose = ({
  action,
}: {
  action: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={action}
      className="p-2 font-bold text-[#2c2d35] text-3xl bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-700 ease-in-out"
    >
      <FaTimes />
    </button>
  );
};

export default ButtonClose;
