import ProfileTravelsPlanCard from "../profile_travels_plan_card/profile_travels_plan_card.component";

type ProfileTravelsPlansProps = {
  plans: [
    {
      id: number;
      place: string;
      country: string;
      travel_date: string;
      days: number;
      completed: boolean;
    }
  ];
};

const ProfileTravelsPlans = ({ plans }: ProfileTravelsPlansProps) => {
  return (
    <div className="w-full h-[30rem] p-2 flex gap-2 justify-center border rounded-xl overflow-y-auto">
      {plans.length ? (
        plans.map((item) => (
          <ProfileTravelsPlanCard
            key={item.id}
            place={item.place}
            country={item.country}
            travel_date={item.travel_date}
            days={item.days}
          />
        ))
      ) : (
        <h1 className="self-center text-2xl font-bold">NO PLANS YET</h1>
      )}
    </div>
  );
};

export default ProfileTravelsPlans;
