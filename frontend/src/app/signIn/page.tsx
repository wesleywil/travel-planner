"use client";

import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data: { expiry: string; token: string } = await response.json();
      if (response.ok) {
        console.log("Registration successfull");
        localStorage.setItem("token", data.token);
        localStorage.setItem("tokenExpiry", data.expiry);
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center text-xl">
      <h1 className="my-2 text-3xl font-bold">Sign In</h1>
      <form
        onSubmit={handleLogin}
        className="p-2 flex flex-col gap-2 text-black"
      >
        <input
          type="text"
          placeholder="Username"
          className="px-2 py-1 rounded"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-1 rounded"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
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
