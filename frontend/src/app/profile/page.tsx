"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import ProfilePlanForm from "@/components/profile_plan_form/profile_plan_form.component";
import ProfileTravels from "@/components/profile_travels/profile_travels.component";
import ProfileUserInformation from "@/components/profile_user_information/profile_user_information.component";
import ProfilePlanDetails from "@/components/profile_plan_details/profile_plan_details.component";

export default function Profile() {
  const formHidden = useSelector(
    (state: RootState) => state.utils.hideFormPlan
  );
  const planDetailsHidden = useSelector(
    (state: RootState) => state.utils.hidePlanDetails
  );
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center z-0">
      <h1 className="mt-8 mb-2 text-3xl font-bold">Profile</h1>
      {/* Form */}
      {formHidden ? "" : <ProfilePlanForm />}
      {planDetailsHidden ? "" : <ProfilePlanDetails />}

      {/* User Information */}
      <ProfileUserInformation />
      {/* Travels */}
      <ProfileTravels />
    </main>
  );
}
