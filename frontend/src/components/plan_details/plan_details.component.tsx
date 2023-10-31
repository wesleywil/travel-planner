const PlanDetails = () => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-2 bg-black/70 border rounded overflow-hidden">
      <div className="w-full px-2 flex justify-between bg-yellow-500">
        <h1 className="self-center text-black font-bold text-xl">Info</h1>
        <button className="my-1 px-1 bg-red-500 hover:bg-red-700 rounded">
          Delete
        </button>
      </div>
      <h2 className="text-xl">Place - Country</h2>
      <img
        src="https://dummyimage.com/150x150"
        alt="place"
        className="rounded-full"
      />

      <h2>Travel Date</h2>
      <h1>30 days</h1>
      <h3>completed</h3>
    </div>
  );
};

export default PlanDetails;
