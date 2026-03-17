import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List sx={{ width: 220 }}>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
