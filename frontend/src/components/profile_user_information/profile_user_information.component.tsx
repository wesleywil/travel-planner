import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { switchProfileFormHidden } from "@/redux/utils/utils";

const ProfileUserInformation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-2 flex flex-col items-center border border-[#f7fbf9] rounded">
      <img
        src={user.profile_picture}
        alt="user profile"
        className="w-32 h-32 p-2 rounded-full"
      />
      <h1 className="w-48 px-2 break-words font-semibold text-xl text-center text-[#f7fbf9]">
        {user.username}
      </h1>
      <h2 className="w-48 px-2 break-words text-xs text-center text-[#f7fbf9]">
        {user.email}
      </h2>
      <button
        onClick={() => dispatch(switchProfileFormHidden())}
        className="mt-2 px-2 py-1 text-sm text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
      >
        Update
      </button>
    </div>
  );
};

export default ProfileUserInformation;
