"use client";

import ImagesSkeleton from "@/components/layouts/common/images-skeleton";
import InfoSkeleton from "@/components/layouts/common/info-skeleton";
import SiteLayout from "@/components/layouts/site-layout";
import ProfileImage from "@/components/modules/home/profile-images";
import ProfileInfo from "@/components/modules/home/profile-info";
import {
  useProfileImages,
  useProfileInfo,
} from "@/hooks/api/useResourceProfile";

const Home = () => {
  const { data: profileInfo, isLoading: isLoadingInfo } = useProfileInfo();
  const { data: profileImages, isLoading: isLoadingImages } =
    useProfileImages();

  return (
    <SiteLayout>
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        {isLoadingInfo ? (
          <InfoSkeleton />
        ) : (
          <ProfileInfo profileInfo={profileInfo} />
        )}
        {isLoadingImages ? (
          <ImagesSkeleton />
        ) : (
          <ProfileImage
            profileInfo={profileInfo}
            profileImages={profileImages}
          />
        )}
      </div>
    </SiteLayout>
  );
};

export default Home;
