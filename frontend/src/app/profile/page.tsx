"use client";

import ProfileTravels from "@/components/profile_travels/profile_travels.component";
import ProfileUserInformation from "@/components/profile_user_information/profile_user_information.component";

export default function Profile() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center">
      <h1 className="mt-8 mb-2 text-3xl font-bold">Profile</h1>
      {/* User Information */}
      <ProfileUserInformation />
      {/* Travels */}
      <ProfileTravels />
    </main>
  );
}
