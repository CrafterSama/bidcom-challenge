import { Skeleton } from "@/components/ui/skeleton";

const ImagesSkeleton = () => {
  return (
    <div className="w-full w-1/2 w-[600px] flex flex-col items-center justify-center gap-4">
      <Skeleton className="relative bg-gray-100 h-[600px] w-full rounded-tl-[150px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[150px]" />
    </div>
  );
};

export default ImagesSkeleton;
