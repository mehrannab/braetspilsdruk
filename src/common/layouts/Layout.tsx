import { AppBarDrawer } from "@/components/appbar/AppBarDrawer";
import { NavDrawer } from "@/components/drawer/NavDrawer";
import { Container } from "@mui/system";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <AppBarDrawer />
      {children}
    </Container>
  );
}
