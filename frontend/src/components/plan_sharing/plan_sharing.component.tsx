import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckSquare, FaRegSquare, FaTimes } from "react-icons/fa";
import type { AppDispatch, RootState } from "@/redux/store";
import { switchPlanSharingHidden } from "@/redux/utils/utils";
import { formatDate } from "@/utils/utils";
import domtoimage from "dom-to-image";

const PlanSharing = () => {
  const plan = useSelector((state: RootState) => state.plans.plan);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();
  const divRef = useRef(null);

  const handleCapture = async () => {
    if (divRef.current) {
      domtoimage
        .toBlob(divRef.current)
        .then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "capture.png";
          link.click();
        })
        .catch((error) => {
          console.log("Error capturing div as image => ", error);
        });
    }
  };

  return (
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-[#2c2d35]/70 backdrop-blur-sm z-40">
      <button
        onClick={() => dispatch(switchPlanSharingHidden())}
        className="p-2 font-bold text-[#2c2d35] text-3xl bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-700 ease-in-out"
      >
        <FaTimes />
      </button>
      <h1 className="my-2 text-[#f7fbf9] text-2xl font-semibold">
        Plan Sharing
      </h1>
      {/* Card */}
      <div
        ref={divRef}
        className="w-80 py-4 flex flex-col  text-[#2c2d35] bg-[#f7fbf9] rounded pattern2"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={plan.picture}
            alt="plan"
            className="p-2 bg-[#97c34f] rounded-full shadow"
          />
          <h1 className="text-3xl font-bold">{plan.place}</h1>
          <h2 className="text-sm italic">{plan.country}</h2>

          <div className="w-full my-1 py-2 bg-[#2c2d35] border-y border-[#97c34f]">
            <h1 className="relative text-center text-[#97c34f] italic">
              {formatDate(plan.travel_date)}
            </h1>
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
      {/* Save Button */}
      <span className="w-80 my-2 text-xs text-gray-400">
        press "save" to save this card as a image, making easier to share with
        friends and family
      </span>
      <div className="mt-2 flex gap-2 justify-center">
        <button
          onClick={handleCapture}
          className="w-20 px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
        >
          Save
        </button>
        <button
          onClick={() => dispatch(switchPlanSharingHidden())}
          className="w-20 px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PlanSharing;
