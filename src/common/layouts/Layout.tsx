import React from "react";
import TopBar from "@/components/appbar/TopBar";
import Footer from "@/components/footer/Footer";
import { AppBarDrawer } from "@/components/appbar/AppBarDrawer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
