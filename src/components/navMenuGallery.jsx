import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import BackButton from "./backButton";
import AccountMenu from "./accountMenu";

export default function NavMenuGallery({userData})  {

  return (
    <>
      {/* NAV LIST & ACCOUNT MENU */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" width={"100%"} spacing={{ xs: 2, sm: 3, md: 4, lg: "4rem" }}>
        
        <Link rel='prefetch' to={'/'}><BackButton /></Link>

        {/* ============= USER AVATAR MENU ============ */}
        <AccountMenu userData={userData} />

      </Stack>
    </>
  )
}