import { Playfair_Display } from "next/font/google";
import { useSelector } from "react-redux";
import { formatDate } from "@/utils/utils";
import type { RootState } from "@/redux/store";

import {
  FaRegCheckSquare,
  FaRegSquare,
  FaRegCalendarAlt,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  style: "italic",
});

const PlanSharingCard = ({
  divRef,
}: {
  divRef: React.RefObject<HTMLDivElement>;
}) => {
  const plan = useSelector((state: RootState) => state.plans.plan);
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <div
      ref={divRef}
      className="w-80 py-4 flex flex-col  text-[#2c2d35] bg-[#f7fbf9] rounded pattern2"
    >
      <div className="flex flex-col items-center text-center">
        <img
          style={{
            backgroundColor: `${plan.completed ? "#2c2d35" : "#97c34f"}`,
          }}
          src={plan.picture}
          alt="plan"
          className="p-2 rounded-full shadow"
        />
        <h1 className="text-3xl font-bold">{plan.place}</h1>
        <h2 className={`${playfair.className}`}>{plan.country}</h2>

        <div className="w-full my-1 py-2 px-4 flex justify-between text-xl bg-[#2c2d35]">
          <div className="self-center text-base text-[#97c34f] rounded">
            <FaRegCalendarAlt />
          </div>
          <h1
            className={`self-center  text-center text-[#f7fbf9] italic ${playfair.className}`}
          >
            {formatDate(plan.travel_date)}
          </h1>
          <div className="self-center text-base text-[#97c34f]">
            <FaRegCalendarAlt />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {todos.length ? (
          todos.map((item) => (
            <div className="w-full px-4 pb-1 flex gap-2 items-center justify-between border-b-2 border-[#2c2d35]/70">
              {item.completed ? (
                <div className="text-xl text-[#97c34f]">
                  <FaRegCheckSquare />
                </div>
              ) : (
                <div className="text-xl">
                  <FaRegSquare />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <h2 className="font-semibold">{item.task}</h2>
                <h3 className="text-sm italic">
                  {item.description.length > 16
                    ? `${item.description.slice(0, 16)}...`
                    : item.description}
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">
                  {item.due_date.slice(8, 10)}
                </h1>
                <h2 className="text-xs">{item.due_date.slice(0, 7)}</h2>
              </div>
            </div>
          ))
        ) : (
          <h2 className="my-4 text-xl font-bold text-center ">
            Nothing Planed
          </h2>
        )}
      </div>
    </div>
  );
};

export default PlanSharingCard;
