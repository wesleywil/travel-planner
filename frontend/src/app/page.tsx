import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-2 flex items-center justify-center">
      <div className="xl:w-2/5 px-4 flex flex-col gap-4">
        <h1 className=" text-6xl font-bold">Embark on Your Dream Journey</h1>
        <h2 className="text-sm">
          Explore, Discover, and Create Unforgettable Travel Plans with Us
        </h2>
        <Link
          href="/profile"
          className="w-24 py-1 font-bold text-xl text-black text-center bg-white rounded"
        >
          Profile
        </Link>
      </div>
      <div className="px-4">
        <img
          src="https://dummyimage.com/600x600"
          alt="homepage"
          className=" rounded"
        />
      </div>
    </main>
  );
}
