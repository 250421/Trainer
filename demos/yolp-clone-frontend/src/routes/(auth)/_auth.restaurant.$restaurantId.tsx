import { useGetRestaurantById } from "@/features/restaurants/hooks/use-get-restaurant-by-id";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/(auth)/_auth/restaurant/$restaurantId")({
  component: RestaurantIdPage,
});

function RestaurantIdPage() {
  const { restaurantId } = useParams({
    from: "/(auth)/_auth/restaurant/$restaurantId",
  });
  const { data: restaurant, isLoading: isRestaurantLoading } =
    useGetRestaurantById({
      id: restaurantId,
    });

  // const { data: reviews, isLoading: isReviewsLoading } = useGetReviewsByRestaurantId({
  //   id: restaurantId,
  // });

  if (isRestaurantLoading /* || isReviewsLoading */)
    return (
      <div className="flex items-center h-screen justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    );

  if (!restaurant) {
    return <h1>No restaurant found</h1>;
  }

  return <div>{restaurant?.name}</div>;
}
