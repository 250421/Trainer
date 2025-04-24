import { axiosInstance } from "@/lib/axios-config";
import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "../models/restaurant";

export const useGetRestaurants = () => {
  return useQuery({
    queryKey: ["restaurants"],
    queryFn: async (): Promise<Restaurant[]> => {
      try {
        const resp = await axiosInstance.get("/restaurants");
        return resp.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });
};
