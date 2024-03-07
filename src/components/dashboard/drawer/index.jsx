import { useContext } from 'react';
import AppContext from '../../../context/context';
import TabMenu from './tab';
import { Avatar, Box, Card, Drawer, Stack, Typography } from '@mui/material';
import BackButton from '../../BackButton';

export default function DrawerMenu(props) {
  const {toggleDrawer, openDrawer} = useContext(AppContext);
  const { userData} = props;  

  const DrawerList = (
    <Box sx={{ width: {xs: "100vw", md: "75vw", lg: "50vw"}}} role="presentation" padding={2}>

      {/* < BACK BUTTON */}
      <BackButton action={toggleDrawer(false)} />

      {/* USER PROFILE CARD */}
      <Card style={{ maxWidth: 350 }} sx={{my: 1}}>
        <Stack direction="row" spacing={2} p={2}>
          <Avatar src={userData ? userData.picture : null} alt='profile-image' />
          <Box>
            <Typography component="div" size="2" weight="bold">{userData ? userData.username : null}</Typography>
            <Typography component="div" size="2" color="gray">{userData ? userData.email : null}</Typography>
          </Box>
        </Stack>
      </Card>

      {/* TAB MENU _|_|_ */}
      <TabMenu />

    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right' disableScrollLock={true}>
      {DrawerList}
    </Drawer>
  );
}