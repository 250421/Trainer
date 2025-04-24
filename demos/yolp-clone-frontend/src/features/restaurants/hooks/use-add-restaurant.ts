import { axiosInstance } from "@/lib/axios-config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddRestaurantSchema } from "../schemas/add-restaurant-schema";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useAddRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: AddRestaurantSchema) => {
      const resp = await axiosInstance.post("/restaurants", values);
      return resp.data;
    },
    onSuccess: () => {
      toast.success("Restaurant added");
      queryClient.invalidateQueries({
        queryKey: ["restaurants"],
      });
    },
    onError: (error) => {
      console.error(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || "Error adding restaurant");
      }
    },
  });
};
