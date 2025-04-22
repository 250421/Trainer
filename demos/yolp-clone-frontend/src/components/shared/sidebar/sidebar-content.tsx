import React from "react";

interface SidebarContainerProps {
  children: React.ReactNode;
}

export const SidebarContent = ({ children }: SidebarContainerProps) => {
  return <div>{children}</div>;
};
