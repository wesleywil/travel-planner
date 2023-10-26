type ProfileTravelsPlanCardProps = {
  place: string;
  country: string;
  travel_date: string;
  days: number;
};

const ProfileTravelsPlanCard = ({
  place,
  country,
  travel_date,
  days,
}: ProfileTravelsPlanCardProps) => {
  return (
    <div className="w-60 h-72 flex flex-col justify-between bg-blue-300 border rounded-xl overflow-hidden">
      <h2 className="w-full font-semibold text-xl text-center bg-yellow-600">
        {place} - {country}
      </h2>
      <div className="p-2 flex flex-col items-center justify-center text-black">
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-full border-2 border-black">
          <h3>{travel_date}</h3>
          <h1 className="text-3xl font-bold">{days} days</h1>
        </div>
      </div>
      <button className="w-full px-2 py-1 bg-red-600 hover:bg-red-800 text-white rounded">
        Details
      </button>
    </div>
  );
};

export default ProfileTravelsPlanCard;
