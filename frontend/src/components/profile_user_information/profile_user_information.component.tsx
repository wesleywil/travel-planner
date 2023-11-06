import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const ProfileUserInformation = () => {
  const user = useSelector((state: RootState) => state.user.user);
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
    </div>
  );
};

export default ProfileUserInformation;
