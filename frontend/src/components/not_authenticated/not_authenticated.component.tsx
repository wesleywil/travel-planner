import Link from "next/link";

const NotAuthenticated = () => {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center z-0">
      <h1 className="mt-8 mb-2 text-[#f7fbf9] text-3xl font-bold">
        YOU'RE NOT LOGGED
      </h1>
      <div className="flex gap-2 justify-center">
        <Link
          href="/signIn"
          className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
        >
          SignIn
        </Link>
        <Link
          href="/signUp"
          className="px-2 py-1 text-[#2c2d35] bg-[#97c34f] hover:bg-[#f7fbf9] font-semibold rounded"
        >
          SignUp
        </Link>
      </div>
    </main>
  );
};

export default NotAuthenticated;
