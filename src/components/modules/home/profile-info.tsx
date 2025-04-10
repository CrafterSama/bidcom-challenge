"use client";

import HomeButton from "@/components/modules/home/home-button";
import { ProfileInfoDTO } from "@/types/resource-api-types";

const ProfileInfo = ({ profileInfo }: { profileInfo: ProfileInfoDTO }) => {
  return (
    <div className="w-full md:w-1/2 max-w-[550px] flex flex-col gap-4 items-center md:items-start justify-center mb-6">
      <div className="flex flex-col gap-4 items-center md:items-start justify-center">
        <h2 role="title" className="md:base text-md">
          {profileInfo.headline}
        </h2>
        <h1
          role="heading"
          className="text-2xl md:text-5xl"
          dangerouslySetInnerHTML={{ __html: profileInfo.title }}
        />
        <p className="text-center md:text-left">{profileInfo.description}</p>
      </div>
      <div className="hidden md:flex">
        <HomeButton buttonData={profileInfo.button} />
      </div>
    </div>
  );
};

export default ProfileInfo;
