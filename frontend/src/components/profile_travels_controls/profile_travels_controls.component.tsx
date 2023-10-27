const ProfileTravelsControls = () => {
  return (
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
  );
};

export default ProfileTravelsControls;
