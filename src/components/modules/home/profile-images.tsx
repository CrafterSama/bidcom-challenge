import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProfileInfoDTO } from "@/types/resource-api-types";
import HomeButton from "./home-button";

type ProfileImageProps = {
  profileImages: { image: string }[];
  profileInfo: ProfileInfoDTO;
};

const ProfileImage = ({ profileImages, profileInfo }: ProfileImageProps) => {
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
                    // Aca le deje esta imagen en ranrom porque las imagenes de la api no se veian, osea solo se
                    // veia la del gatito (la primera), las demas no se veian y a falta de poder modificar el string
                    // pues preferi colocar estas imagenes en random para que no quedara como sin imagen la seccion.
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
      <div className="flex md:hidden w-full">
        <HomeButton buttonData={profileInfo.button} />
      </div>
    </div>
  );
};

export default ProfileImage;
