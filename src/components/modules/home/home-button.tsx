import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type HomeButtonProps = {
  title?: string;
  link?: string;
};

const HomeButton = ({ buttonData }: { buttonData: HomeButtonProps }) => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push(buttonData.link as string);
  };

  return (
    <Button
      role="button"
      size="3xl"
      className={`flex flex-row items-center justify-center w-full md:w-max-content`}
      onClick={handleGetStartedClick}
    >
      <span>{buttonData.title}</span>
      <ArrowRight className="h-6 w-6" />
    </Button>
  );
};

export default HomeButton;
