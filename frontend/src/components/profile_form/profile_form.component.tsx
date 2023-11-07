import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { AppDispatch, RootState } from "@/redux/store";
import { updateUser } from "@/redux/user/user";
import { switchProfileFormHidden } from "@/redux/utils/utils";

const ProfileForm = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formFields = new FormData(form);

    formFields.append("id", String(user.id!));

    dispatch(updateUser(formFields));
    window.location.reload();
  };

  return (
    <div className="absolute min-h-screen min-w-full flex flex-col items-center justify-center bg-[#2c2d35]/70 z-30">
      <button className="p-2 font-bold text-[#2c2d35] text-3xl bg-[#97c34f] hover:bg-[#f7fbf9] rounded-full transform duration-500 ease-in-out">
        <FaTimes />
      </button>
      <h1 className="my-1 text-2xl text-[#f7fbf9]">Update User Information</h1>
      <form
        onSubmit={handleUpdate}
        className="md:w-2/3 xl:w-2/5 mt-4 p-4 flex flex-col gap-2 text-black font-semibold border border-[#97c34f] rounded"
      >
        <div className="px-2 py-1 flex gap-2 bg-[#f7fbf9] rounded">
          <input
            type="file"
            name="profile_picture"
            className=" hover:file:text-[#f7fbf9] file:bg-[#97c34f] hover:file:bg-[#2c2d35] file:outline-0 file:border-0 rounded file:transform file:duration-500 file:ease-in-out"
          />
          <span className="self-center">Profile Picture</span>
        </div>
        <input
          type="text"
          name="email"
          defaultValue={user.email}
          placeholder="E-mail"
          className="px-2 py-1 outline-0 rounded"
        />
        <input
          type="text"
          name="first_name"
          defaultValue={user.first_name ? user.first_name : "NOT INCLUDED"}
          placeholder="First Name"
          className="px-2 py-1 outline-0 rounded"
        />
        <input
          type="text"
          name="last_name"
          defaultValue={user.last_name ? user.last_name : "NOT INCLUDED"}
          placeholder="Last Name"
          className="px-2 py-1 outline-0 rounded"
        />
        <div className="flex gap-4 justify-center">
          <button className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded">
            Submit
          </button>
          <button
            onClick={() => dispatch(switchProfileFormHidden())}
            type="button"
            className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
