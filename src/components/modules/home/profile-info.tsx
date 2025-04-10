"use client";

import { Button } from "@/components/ui/button";
import { ProfileInfoDTO } from "@/types/resource-api-types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileInfo = ({ profileInfo }: { profileInfo: ProfileInfoDTO }) => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push(profileInfo.button.link);
  };

  return (
    <div className="w-full md:w-1/2 max-w-[550px] flex flex-col gap-4 items-center md:items-start justify-center">
      <h2 role="title" className="md:base text-md">
        {profileInfo.headline}
      </h2>
      <h1
        role="heading"
        className="text-2xl md:text-5xl"
        dangerouslySetInnerHTML={{ __html: profileInfo.title }}
      />
      <p className="text-center md:text-left">{profileInfo.description}</p>
      <div className="mt-4">
        <Button
          role="button"
          size="2xl"
          className="md:flex flex-row items-center justify-between w-full md:w-max-content hidden"
          onClick={handleGetStartedClick}
        >
          <span>{profileInfo.button.title}</span>
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
