import { AppSidebar } from "./components/shared/sidebar/app-sidebar";
import { SidebarContainer } from "./components/shared/sidebar/sidebar-container";

import { SidebarMainWrapper } from "./components/shared/sidebar/sidebar-main-wrapper";

function App() {
  return (
    <SidebarContainer>
      <AppSidebar />

      <SidebarMainWrapper>
        <div>This is the App.tsx screen</div>
      </SidebarMainWrapper>
    </SidebarContainer>
  );
}

export default App;
