import { api } from "@/utils/axios";

export const getProfileInfo = async () => {
  const { data } = await api.get("/api/get-profile-info");
  return data;
};

export const getProfileImages = async () => {
  const { data } = await api.get("/api/get-profile-images");
  return data;
};
