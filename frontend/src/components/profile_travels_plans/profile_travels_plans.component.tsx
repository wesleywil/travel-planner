import { Plans } from "@/utils/interfaces";

import ProfileTravelsPlanCard from "../profile_travels_plan_card/profile_travels_plan_card.component";

type ProfileTravelsPlansProps = {
  plans: Plans[];
};

const ProfileTravelsPlans = ({ plans }: ProfileTravelsPlansProps) => {
  return (
    <div className="w-full h-[30rem] p-2 flex gap-2 justify-center border border-[#f7fbf9] rounded-xl overflow-y-auto">
      {plans.length ? (
        plans.map((item) => (
          <ProfileTravelsPlanCard key={item.id} data={item} />
        ))
      ) : (
        <h1 className="self-center text-[#f7fbf9] text-2xl font-bold">
          NO PLANS YET
        </h1>
      )}
    </div>
  );
};

export default ProfileTravelsPlans;
