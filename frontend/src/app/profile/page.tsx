"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { retrieveUser } from "@/redux/user/user";

import ProfileForm from "@/components/profile_form/profile_form.component";
import ProfilePlanForm from "@/components/profile_plan_form/profile_plan_form.component";
import ProfileTravels from "@/components/profile_travels/profile_travels.component";
import ProfileUserInformation from "@/components/profile_user_information/profile_user_information.component";
import ProfilePlanDetails from "@/components/profile_plan_details/profile_plan_details.component";
import NotAuthenticated from "@/components/not_authenticated/not_authenticated.component";
import Loading from "@/components/loading/loading.component";

export default function Profile() {
  const formHidden = useSelector(
    (state: RootState) => state.utils.hideFormPlan
  );
  const profileFormHidden = useSelector(
    (state: RootState) => state.utils.hideProfileForm
  );
  const planDetailsHidden = useSelector(
    (state: RootState) => state.utils.hidePlanDetails
  );
  const status = useSelector((state: RootState) => state.user.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(retrieveUser());
    }
  }, [status]);
  if (status === "idle" || status === "trying to retrieve user info") {
    return <Loading />;
  }
  if (status === "user info failed to be retrieved") {
    return <NotAuthenticated />;
  } else {
    return (
      <main className="min-h-screen min-w-screen flex flex-col items-center z-0">
        <h1 className="mt-8 mb-2 text-[#f7fbf9] text-3xl font-bold">Profile</h1>
        {/* Form */}
        {formHidden ? "" : <ProfilePlanForm />}
        {planDetailsHidden ? "" : <ProfilePlanDetails />}
        {profileFormHidden ? "" : <ProfileForm />}
        {/* User Information */}
        <ProfileUserInformation />
        {/* Travels */}
        <ProfileTravels />
      </main>
    );
  }
}
