import { useEffect, useState } from "react";
import ProfileTravelsControls from "../profile_travels_controls/profile_travels_controls.component";
import ProfileTravelsPlans from "../profile_travels_plans/profile_travels_plans.component";

const ProfileTravels = () => {
  const [data, setData] = useState<
    [
      {
        id: number;
        place: string;
        country: string;
        travel_date: string;
        days: number;
        completed: boolean;
      }
    ]
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    const getPlans = async () => {
      const res = await fetch("http://localhost:8000/api/plans/?format=json", {
        cache: "no-cache",
        headers: headers,
        credentials: "include",
      });
      setData(await res.json());
      setIsLoading(false);
    };
    getPlans();
  }, []);
  if (isLoading) return <p>loading...</p>;
  if (!data) return <p>No Plans Data</p>;
  return (
    <div className="w-11/12 h-[35rem] mt-8">
      {/* Controls */}
      <ProfileTravelsControls />
      {/* Plans */}
      <ProfileTravelsPlans plans={data} />
    </div>
  );
};

export default ProfileTravels;
