import { useContext } from 'react';
import AppContext from '../../../context/context';
import TabMenu from './tab';
import { Avatar, Box, Card, Drawer, Stack, Typography } from '@mui/material';
import BackButton from '../../BackButton';

export default function DrawerMenu(props) {
  const {toggleDrawer, openDrawer} = useContext(AppContext);
  const { userData} = props; 

  const DrawerList = (
    <Box sx={{width: { xs: "100vw", md: "75vw", lg: "50vw"}, height: "100%"}} role="presentation" padding={2}>

      {/* < BACK BUTTON */}
      <BackButton action={toggleDrawer(false)} />

      <Stack spacing={3} sx={{my: 2}} height="calc(100% - 45px) ">

        {/* USER PROFILE CARD */}
        <Card sx={{ maxWidth: {xs: 280, sm: 320}}}>
          <Stack direction="row" spacing={2} p={2}>
            <Avatar src={userData ? userData.picture : null} alt='profile-image' />
            <Box sx={{ maxWidth: {xs: 180, sm: 220} }}>
              <Typography component="h3" size="2" sx={{fontWeight: 500}}>{userData ? userData.username : null}</Typography>
              <Typography component="p" size="2" color="gray" noWrap={true}>{userData ? userData.email : null}</Typography>
            </Box>
          </Stack>
        </Card>

        {/* TAB MENU _|_|_ */}
        <TabMenu />
        
      </Stack>

    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right' disableScrollLock={true}>
      {DrawerList}
    </Drawer>
  );
}