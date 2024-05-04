import TopBar from "@/components/appbar/TopBar";
import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
