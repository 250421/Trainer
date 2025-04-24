import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProfile } from "./user-profile";
import { useSignOut } from "../hooks/use-sign-out";
import { useConfirm } from "@/hooks/use-confirm";
import { LogOut, Plus } from "lucide-react";
import { useState } from "react";
import { AddRestaurantDialog } from "@/features/restaurants/components/add-restaurant-dialog";

export const UserDropdown = () => {
  const [logOutConfirm, LogOutDialog] = useConfirm();
  const [openAddRestaurantDialog, setOpenAddRestaurantDialog] = useState(false);

  const { mutate: signOut } = useSignOut();

  const handleLogOut = async () => {
    const ok = await logOutConfirm();
    if (!ok) return;

    signOut();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserProfile />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpenAddRestaurantDialog(true)}>
            <Plus className="size-4 mr-2" />
            Add Restaurant
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            <LogOut className="size-4  mr-2" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddRestaurantDialog
        open={openAddRestaurantDialog}
        setOpen={setOpenAddRestaurantDialog}
      />
      <LogOutDialog
        title={"Log Out"}
        description={"Are you sure you want to log out?"}
        destructive
      />
    </>
  );
};
