import { useEffect, useState } from "react";

const ProfileUserInformation = () => {
  const [data, setData] = useState<{ username: string; email: string }>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token 79fe4f0384bb3da659d9958bb3e9c76c27bfdef9249e6e6dde46b074f554d9e6`,
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
      setData(await res.json());
      setIsLoading(false);
    };
    getUserInfo();
  }, []);

  if (isLoading) return <p>loading...</p>;
  if (!data) return <p>No Profile Data</p>;
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://dummyimage.com/100x100"
        alt="user profile"
        className="w-32 h-32 p-2 rounded-full"
      />
      <h1 className="w-48 px-2 break-words text-center text-slate-200">
        {data.username}
      </h1>
      <h2 className="w-48 px-2 break-words text-xs text-center text-slate-200">
        {data.email}
      </h2>
    </div>
  );
};

export default ProfileUserInformation;
