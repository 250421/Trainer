import { Restaurant } from "../models/restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

export const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="w-[300px] h-[300px] rounded-md border shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <img
        src={
          restaurant.imageUrl || "https://placehold.co/600x400?text=No+Image"
        }
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4 flex flex-col gap-y-1">
        <p className="font-bold text-xl capitalize">{restaurant.name}</p>
        <p className="text-muted-foreground text-sm">
          {restaurant.description || "No description available"}
        </p>
        <p className="text-muted-foreground text-sm">
          {restaurant.address || "No address available"}
        </p>
        <p className="text-muted-foreground text-sm">
          {restaurant.phone || "No phone # available"}
        </p>
      </div>
    </div>
  );
};
