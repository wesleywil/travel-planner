"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { signIn } from "@/redux/user/user";
import Link from "next/link";

export default function SignIn() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await dispatch(signIn(formData));
    console.log("RESULT ==> ", res);
    if (
      res.payload.hasOwnProperty("expiry") &&
      res.payload.hasOwnProperty("token")
    ) {
      localStorage.setItem("token", res.payload.token);
      localStorage.setItem("tokenExpiry", res.payload.expiry);
      window.location.href = "/profile";
    }
    if (res.payload.non_field_errors) {
      setMessage("Username or Password incorrect!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center text-[#f7fbf9] text-xl">
      <h1 className="my-2 text-3xl font-bold">Sign In</h1>
      <form
        onSubmit={handleLogin}
        className="w-11/12 md:w-2/4 xl:w-1/4 p-4 flex flex-col gap-2 font-semibold text-[#2c2d35] border border-[#f7fbf9] rounded"
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="px-2 py-1 bg-[#f7fbf9] rounded"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="px-2 py-1 bg-[#f7fbf9] rounded"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {message.length ? (
          <h2 className="w-full text-[#97c34f] text-sm text-center rounded">
            {message}
          </h2>
        ) : (
          ""
        )}
        <div className="mt-2 pb-2 flex gap-4 justify-center border-b border-[#f7fbf9]">
          <button className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] rounded transform duration-500 ease-in-out">
            Sign In
          </button>
          <button
            onClick={() => setFormData({ username: "", password: "" })}
            type="button"
            className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] rounded transform duration-500 ease-in-out"
          >
            Cancel
          </button>
        </div>
        <Link
          href="/signUp"
          className="text-center text-base text-[#f7fbf9] hover:text-[#97c34f] transform duration-500 ease-in-out"
        >
          Don't have an account? Register Here!
        </Link>
      </form>
    </main>
  );
}
