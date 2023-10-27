import ProfileTravelsControls from "../profile_travels_controls/profile_travels_controls.component";
import ProfileTravelsPlans from "../profile_travels_plans/profile_travels_plans.component";

const ProfileTravels = () => {
  return (
    <div className="w-11/12 mt-8 ">
      {/* Controls */}
      <ProfileTravelsControls />
      {/* Plans */}
      <ProfileTravelsPlans />
    </div>
  );
};

export default ProfileTravels;
