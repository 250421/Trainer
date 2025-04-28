import { RestaurantItem } from "@/features/restaurants/components/restaurant-item";
import { useGetRestaurants } from "@/features/restaurants/components/use-get-restaruants";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth/")({
  component: Index,
});

function Index() {
  const { data: restaurants } = useGetRestaurants();
  const { isOpen } = useSidebar();

  if (!restaurants || restaurants.length === 0) {
    return <h1>No restaurants found</h1>;
  }

  return (
    <div
      className={cn("grid gap-y-10", isOpen ? "grid-cols-3" : "grid-cols-4")}
    >
      {restaurants.map((resto, index) => (
        <Link
          key={resto.id}
          to={"/restaurant/$restaurantId"}
          params={{
            restaurantId: resto.id.toString(),
          }}
        >
          <RestaurantItem restaurant={resto} />
        </Link>
      ))}
    </div>
  );
}
