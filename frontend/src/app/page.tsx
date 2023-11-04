import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-2 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="xl:w-2/5 pl-2 flex flex-col items-center md:items-start gap-4">
        <h1 className=" text-center md:text-left text-6xl font-bold  text-[#97c34f]">
          Embark on Your Dream Journey
        </h1>
        <h2 className="text-[#f7fbf9]">
          Explore, Discover, and Create Unforgettable Travel Plans with Us
        </h2>
        <Link
          href="/profile"
          className="w-36 py-2 font-bold text-xl text-center text-[#2c2d35] hover:text-[#f7fbf9] bg-[#97c34f] hover:bg-[#97c34f]/50 rounded transform duration-500 ease-in-out"
        >
          Profile
        </Link>
      </div>
      <div className="px-4">
        <Image
          src="/homepage2.svg"
          alt="homepage"
          width="600"
          height="600"
          className="p-2"
        />
      </div>
    </main>
  );
}
