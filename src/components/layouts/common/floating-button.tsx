import { CircleChevronUp } from "lucide-react";

const FloatingButton = () => {
  return (
    <button className="cursor-pointer absolute bottom-4 flex items-center justify-center rounded-full bg-gray-100 shadow-md float 3s ease-in-out infinite">
      <CircleChevronUp className="h-8 w-8 text-gray-800" />
    </button>
  );
};

export default FloatingButton;
