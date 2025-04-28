import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "../models/restaurant";
import { axiosInstance } from "@/lib/axios-config";

interface useGetRestaurantByIdProps {
  id: string;
}

export const useGetRestaurantById = ({ id }: useGetRestaurantByIdProps) => {
  return useQuery({
    queryKey: ["restaurant"],
    queryFn: async (): Promise<Restaurant | null> => {
      try {
        const resp = await axiosInstance.get(`/restaurants/${id}`);
        return resp.data;
      } catch (error) {
        return null;
      }
    },
  });
};
