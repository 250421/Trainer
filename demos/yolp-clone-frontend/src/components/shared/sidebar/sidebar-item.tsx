import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export const SidebarItem = ({ label, icon: Icon, href }: SidebarItemProps) => {
  return (
    <div>
      <Button className="w-full flex justify-start" variant={"ghost"} asChild>
        <Link to={href}>
          <Icon className="size-4 mr-2" />
          {label}
        </Link>
      </Button>
    </div>
  );
};
