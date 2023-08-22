import { QueryParams } from "@/types/queryParams";

export const queryParams: QueryParams = {
  api_key: process.env.API_KEY || "",
  language: "en-US",
  page: "1",
};
