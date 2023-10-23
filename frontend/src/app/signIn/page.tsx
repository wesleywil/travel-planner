export default function Register() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center text-xl">
      <h1 className="my-2 text-3xl font-bold">Sign In</h1>
      <form className="p-2 flex flex-col gap-2 text-black">
        <input
          type="text"
          placeholder="Username"
          className="px-2 py-1 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-1 rounded"
        />

        <div className="mt-2 flex gap-4 justify-center">
          <button className="px-2 py-1 bg-black hover:bg-gray-700 border border-white text-white rounded">
            Sign In
          </button>
          <button
            type="button"
            className="px-2 py-1 bg-black hover:bg-gray-700 border border-white text-white rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
