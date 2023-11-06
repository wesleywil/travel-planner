"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { signUp } from "@/redux/user/user";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatch, setpasswordMatch] = useState(true);
  const [message, setMessage] = useState("");

  const handleMessage = (message: string, time: number) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, time);
  };
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      const res = await dispatch(signUp(formData));
      console.log("RES => ", res);
      if (
        res.payload.hasOwnProperty("token") &&
        res.payload.hasOwnProperty("user")
      ) {
        window.location.href = "/signIn";
      }
      if (res.payload.hasOwnProperty("username")) {
        handleMessage("Username taken, choose another one!", 3000);
      }
      if (res.payload.password) {
        handleMessage(
          "Password is too short, too common or it's entirely numeric, please make a strong password with at least 8 characteres",
          5000
        );
      }
    } else {
      // Passwords don't match
      setpasswordMatch(false);
      setTimeout(() => {
        setpasswordMatch(true);
      }, 3000);
    }
  };
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center text-[#f7fbf9] text-xl">
      <h1 className="my-2 text-3xl font-bold">Register</h1>
      <form
        onSubmit={handleRegister}
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
          type="email"
          placeholder="E-mail"
          required
          className="px-2 py-1 bg-[#f7fbf9] rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        <input
          type="password"
          placeholder="Confirm Password"
          required
          className="px-2 py-1 bg-[#f7fbf9] rounded"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <div className="w-96 mx-auto px-2 flex flex-col gap-2 text-center">
          {!passwordMatch ? (
            <h2 className="w-full text-[#97c34f] text-sm text-center rounded">
              Password does not match. Please try again!
            </h2>
          ) : (
            ""
          )}
          {message.length ? (
            <h2 className="w-full text-[#97c34f] text-sm text-center rounded">
              {message}
            </h2>
          ) : (
            ""
          )}
        </div>

        <div className="mt-2 pb-2 flex gap-4 justify-center border-b border-[#f7fbf9]">
          <button className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] rounded transform duration-500 ease-in-out">
            Register
          </button>
          <button
            onClick={() => router.push("/signIn")}
            type="button"
            className="px-2 py-1 bg-[#97c34f] hover:bg-[#f7fbf9] rounded transform duration-500 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
