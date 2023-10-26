"use client";

import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMath, setPasswordMatch] = useState(true);
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        const response = await fetch("http://localhost:8000/api/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Registration successfull");
        } else {
          console.log("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    }
    // Passwords don't match, set a flag to indicate this to the user.
    setPasswordMatch(false);
  };
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center text-xl">
      <h1 className="my-2 text-3xl font-bold">Register</h1>
      <form
        onSubmit={handleRegister}
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
          type="email"
          placeholder="E-mail"
          className="px-2 py-1 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-2 py-1"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <div className="w-96 px-2 text-center">
          {!passwordMath ? (
            <h1 className="text-red-400 text-base">
              Password does not match. Please try again!
            </h1>
          ) : (
            ""
          )}
        </div>

        <div className="mt-2 flex gap-4 justify-center">
          <button className="px-2 py-1 bg-black hover:bg-gray-700 border border-white text-white rounded">
            Register
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
