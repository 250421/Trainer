import { useGetRestaurants } from "@/features/restaurants/components/use-get-restaruants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth/")({
  component: Index,
});

function Index() {
  const { data: restaurants } = useGetRestaurants();
  return (
    <div>
      {restaurants?.map((resto) => (
        <div key={resto?.id}>
          <p>{resto?.name}</p>
          <p>{resto?.description}</p>
          <p>{resto?.address}</p>
          <p>{resto?.phone}</p>
          <p>{resto?.imageUrl}</p>
        </div>
      ))}
    </div>
  );
}
