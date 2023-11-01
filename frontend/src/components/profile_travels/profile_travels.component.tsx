import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchPlans } from "@/redux/plans/plans";

import ProfileTravelsControls from "../profile_travels_controls/profile_travels_controls.component";
import ProfileTravelsPlans from "../profile_travels_plans/profile_travels_plans.component";

const ProfileTravels = () => {
  const plans = useSelector((state: RootState) => state.plans.plans);
  const status = useSelector((state: RootState) => state.plans.status);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      status === "idle" ||
      status === "plan created" ||
      status === "plan updated" ||
      status === "plan deleted"
    ) {
      dispatch(fetchPlans());
      setIsLoading(false);
      console.log("STATUS=> ", status);
    }
  }, [status]);
  if (isLoading) return <p>loading...</p>;
  if (!plans) return <p>No Plans Data</p>;
  return (
    <div className="w-11/12 h-[35rem] mt-8">
      {/* Controls */}
      <ProfileTravelsControls />
      {/* Plans */}
      <ProfileTravelsPlans plans={plans} />
    </div>
  );
};

export default ProfileTravels;
