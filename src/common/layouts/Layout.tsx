import { AppBarDrawer } from "@/components/appbar/AppBarDrawer";
import { NavDrawer } from "@/components/drawer/NavDrawer";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <AppBarDrawer />
      {children}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: -250,
        }}>
        <Footer />
      </Box>
    </Container>
  );
}
