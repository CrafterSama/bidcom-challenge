import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProfileInfoDTO } from "@/types/resource-api-types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ProfileImageProps = {
  profileImages: { image: string }[];
  profileInfo?: ProfileInfoDTO;
};

const ProfileImage = ({ profileImages, profileInfo }: ProfileImageProps) => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push(profileInfo?.button?.link as string);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Carousel className="w-full md:w-1/2 md:w-[600px] max-w-[80vw] flex flex-col items-center justify-center gap-4">
        <CarouselContent>
          {profileImages.map((item: { image: string }) => {
            const random = Math.floor(Math.random() * 100);
            return (
              <CarouselItem key={Math.random()}>
                <div className="relative bg-gray-100 h-full md:h-[600px] w-full md:rounded-tl-[150px] md:rounded-tr-[50px] md:rounded-bl-[50px] md:rounded-br-[150px] rounded-tl-[100px] rounded-tr-[35px] rounded-bl-[35px] rounded-br-[100px] overflow-hidden grid place-items-center">
                  <img
                    src={`https://picsum.photos/600/600?random=${random}`}
                    alt="Profile Image"
                    className="scale-180"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <Button
        role="button"
        size="2xl"
        className="flex items-center justify-center w-full md:w-fit md:hidden"
        onClick={handleGetStartedClick}
      >
        {profileInfo?.button.title}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default ProfileImage;
