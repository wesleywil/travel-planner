"use client";

import { useEffect, useState } from "react";

import ProfileTravels from "@/components/profile_travels/profile_travels.component";
import ProfileUserInformation from "@/components/profile_user_information/profile_user_information.component";

export default function Profile() {
  const [data, setData] = useState<{ username: string; email: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Token a4329ceba2e911d568d53644905cd3f0e55163c070a7dd8cf83c298b92746dec",
    };
    const getUserInfo = async () => {
      const res = await fetch(
        "http://localhost:8000/api/retrieveUser/?format=json",
        {
          headers: headers,
          credentials: "include",
        }
      );
      setData(await res.json());
      setIsLoading(false);
    };
    getUserInfo();
  }, []);

  if (isLoading) return <p>loading...</p>;
  if (!data) return <p>No Profile Data</p>;
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center">
      <h1 className="mt-8 mb-2 text-3xl font-bold">Profile</h1>
      {/* User Information */}
      <ProfileUserInformation username={data.username} email={data.email} />
      {/* Travels */}
      <ProfileTravels />
    </main>
  );
}
