import { useRef } from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import type { AppDispatch } from "@/redux/store";
import domtoimage from "dom-to-image";

import { switchPlanSharingHidden } from "@/redux/utils/utils";

import PlanSharingCard from "../plan_sharing_card/plan_sharing_card.component";

const PlanSharing = () => {
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
      <PlanSharingCard divRef={divRef} />
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
