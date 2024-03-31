import CreateIcon from "@mui/icons-material/Create";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  List as MuiList,
  ListItemIcon as MuiListItemIcon,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const List = styled(MuiList)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: 0,
}));

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  gap: theme.spacing(3),
}));

const ListItemTypography = styled(Typography)({
  fontWeight: "bold",
  fontFamily: "sans-serif",
});

export function NavDrawer() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, [setIsDrawerOpen]);

  const toggleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  const handleRouting = (route: string) => () => {
    router.push(route);
  };

  return (
    <>
      <IconButton size="large" edge="start" onClick={toggleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawerClose}>
        <List>
          <ListItemButton onClick={handleRouting("/")}>
            <ListItem>
              <ListItemIcon onClick={toggleDrawerClose}>
                <HomeIcon />
                <ListItemTypography>Hjem</ListItemTypography>
              </ListItemIcon>
            </ListItem>
          </ListItemButton>
          <ListItemButton onClick={handleRouting("/custom")}>
            <ListItem>
              <ListItemIcon onClick={toggleDrawerClose}>
                <CreateIcon />
                <ListItemTypography>Lav selv</ListItemTypography>
              </ListItemIcon>
            </ListItem>
          </ListItemButton>
          <ListItemButton onClick={handleRouting("/premade")}>
            <ListItem>
              <ListItemIcon onClick={toggleDrawerClose}>
                <FactCheckIcon />
                <ListItemTypography>Færdiglavet</ListItemTypography>
              </ListItemIcon>
            </ListItem>
          </ListItemButton>
          <ListItemButton onClick={handleRouting("/info")}>
            <ListItem>
              <ListItemIcon onClick={toggleDrawerClose}>
                <InfoIcon />
                <ListItemTypography>Info</ListItemTypography>
              </ListItemIcon>
            </ListItem>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
