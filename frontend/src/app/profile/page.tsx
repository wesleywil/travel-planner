import ProfileTravelsPlanCard from "@/components/profile_travels_plan_card/profile_travels_plan_card.component";

export default function Profile() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center">
      <h1 className="mt-8 mb-2 text-3xl font-bold">Profile</h1>
      {/* User Information */}
      <div className="flex flex-col items-center">
        <img
          src="https://dummyimage.com/100x100"
          alt="user profile"
          className="w-32 h-32 p-2 rounded-full"
        />
        <h1 className="w-48 px-2 break-words text-center text-slate-200">
          Username
        </h1>
        <h2 className="w-48 px-2 break-words text-xs text-center text-slate-200">
          Email@mail.com
        </h2>
      </div>
      {/* Travels */}

      <div className="w-11/12 mt-8 ">
        {/* Controls */}
        <div className="w-full px-2 flex justify-between">
          <button className="w-10 h-10 text-xl font-bold bg-red-600 hover:bg-red-800 rounded-full">
            +
          </button>
          <div className="p-2 flex gap-2">
            <button className="px-2 py-1 bg-blue-600 hover:bg-blue-800 rounded">
              Plans
            </button>
            <button className="px-2 py-1 bg-green-600 hover:bg-green-800 rounded">
              Visited
            </button>
          </div>
        </div>
        {/* Plans */}
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
      </div>
    </main>
  );
}
