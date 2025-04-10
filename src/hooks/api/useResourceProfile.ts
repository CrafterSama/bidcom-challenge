import { getProfileImages, getProfileInfo } from "@/services/get-api-resource";
import { useQuery } from "@tanstack/react-query";

export function useProfileInfo() {
  return useQuery({
    queryKey: ["info"],
    queryFn: async () => await getProfileInfo(),
  });
}

export function useProfileImages() {
  return useQuery({
    queryKey: ["images"],
    queryFn: async () => await getProfileImages(),
  });
}
