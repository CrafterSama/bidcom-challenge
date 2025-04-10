import { api } from "@/utils/axios";

export const getProfileInfo = async () => {
  const res = await fetch("/api/get-profile-info");
  const data = await res.json();
  return data;
};

export const getProfileImages = async () => {
  const { data } = await api.get("/api/get-profile-images");
  return data;
};
