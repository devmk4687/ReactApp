import { Button } from "@mui/material";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  return <Button onClick={login}>Login</Button>;
}
