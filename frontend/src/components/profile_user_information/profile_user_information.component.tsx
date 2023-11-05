import { User } from "@/utils/interfaces";
import { useEffect, useState } from "react";

const ProfileUserInformation = () => {
  const [data, setData] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    const getUserInfo = async () => {
      const res = await fetch(
        "http://localhost:8000/api/retrieveUser/?format=json",
        {
          cache: "no-cache",
          headers: headers,
          credentials: "include",
        }
      );
      //console.log("RES => ", res.json());
      setData(await res.json());
      setIsLoading(false);
    };
    getUserInfo();
  }, []);

  if (isLoading) return <p>loading...</p>;
  if (!data) return <p>No Profile Data</p>;
  return (
    <div className="p-2 flex flex-col items-center border border-[#f7fbf9] rounded">
      <img
        src={data.profile_picture}
        alt="user profile"
        className="w-32 h-32 p-2 rounded-full"
      />
      <h1 className="w-48 px-2 break-words font-semibold text-xl text-center text-[#f7fbf9]">
        {data.username}
      </h1>
      <h2 className="w-48 px-2 break-words text-xs text-center text-[#f7fbf9]">
        {data.email}
      </h2>
    </div>
  );
};

export default ProfileUserInformation;
