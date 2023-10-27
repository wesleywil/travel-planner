import ProfileTravelsPlanCard from "../profile_travels_plan_card/profile_travels_plan_card.component";

const ProfileTravelsPlans = () => {
  return (
    <div className="w-full h-[30rem] p-2 flex gap-2 justify-center border overflow-y-auto">
      <ProfileTravelsPlanCard
        place="Paris"
        country="France"
        travel_date="Nov 15 2023"
        days={30}
      />
      <ProfileTravelsPlanCard
        place="Rome"
        country="Italy"
        travel_date="Feb 22 2024"
        days={15}
      />
      <ProfileTravelsPlanCard
        place="London"
        country="England"
        travel_date="March 06 2024"
        days={60}
      />
    </div>
  );
};

export default ProfileTravelsPlans;
