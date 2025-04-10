import { Skeleton } from "@/components/ui/skeleton";

const InfoSkeleton = () => {
  return (
    <div className="container py-12 md:py-24">
      <div className="w-full md:w-1/2 max-w-[550px] flex flex-col gap-4 items-start justify-center">
        {/* Headline skeleton */}
        <Skeleton className="h-6 w-48" />

        {/* Title skeleton - larger and two lines */}
        <div className="space-y-2">
          <Skeleton className="h-10 w-full max-w-md" />
          <Skeleton className="h-10 w-3/4 max-w-sm" />
        </div>

        {/* Description skeleton - three lines */}
        <div className="space-y-2 w-full">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        {/* Button skeleton */}
        <Skeleton className="h-10 w-36 mt-4" />
      </div>
    </div>
  );
};

export default InfoSkeleton;
