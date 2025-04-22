import { SidebarContainer } from "./components/shared/sidebar/sidebar-container";
import { Sidebar } from "./components/shared/sidebar/sidebar";
import { SidebarContent } from "./components/shared/sidebar/sidebar-content";
import { SidebarGroup } from "./components/shared/sidebar/sidebar-group";
import { SidebarItem } from "./components/shared/sidebar/sidebar-item";
import { Home, List, Settings } from "lucide-react";

import { SidebarMainWrapper } from "./components/shared/sidebar/sidebar-main-wrapper";

function App() {
  return (
    <SidebarContainer>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem label={"Dashboard"} icon={Home} href={"/dashboard"} />
            <SidebarItem label={"Products"} icon={List} href={"/products"} />
            <SidebarItem
              label={"Settings"}
              icon={Settings}
              href={"/settings"}
            />
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarMainWrapper>
        <div>This is the App.tsx screen</div>
      </SidebarMainWrapper>
    </SidebarContainer>
  );
}

export default App;
