import { axiosInstance } from "@/lib/axios-config";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const resp = await axiosInstance.get("/auth");
        return resp.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });
};
