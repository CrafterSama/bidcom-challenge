export type resourceType = "info" | "images";

export interface ProfileInfoDTO {
  title: string;
  headline: string;
  description: string;
  button: { title: string; link: string };
}

export interface ProfileImagesDTO {
  data: string[];
}
