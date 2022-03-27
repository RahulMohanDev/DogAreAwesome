import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function MainPage() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}
