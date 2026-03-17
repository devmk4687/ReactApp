import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useAuth } from "../../auth/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Admin Panel</Typography>
        <Button color="inherit" onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
