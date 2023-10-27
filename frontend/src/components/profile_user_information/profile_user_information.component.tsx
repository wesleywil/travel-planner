const ProfileUserInformation = () => {
  return (
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
  );
};

export default ProfileUserInformation;
