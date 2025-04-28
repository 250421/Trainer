import { Home } from "lucide-react";
import { Sidebar } from "./sidebar";
import { SidebarContent } from "./sidebar-content";
import { SidebarGroup } from "./sidebar-group";
import { SidebarItem } from "./sidebar-item";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem label={"Dashboard"} icon={Home} href={"/"} />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
