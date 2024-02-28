import { useContext } from 'react';
import AppContext from '../context/context';
import TabMenu from './tabMenu';
import { ArrowBackIos } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Drawer, Stack, Typography } from '@mui/material';

export default function DrawerMenu(props) {
  const {toggleDrawer, openDrawer, appTexts} = useContext(AppContext);
  const {drawermenutext1} = appTexts;
  const { userData} = props;  

  const DrawerList = (
    <Box sx={{ width: {xs: "100vw", md: "75vw", lg: "50vw"}}} role="presentation" padding={2}>

      {/* < BACK BUTTON */}
      <Button variant="text" startIcon={<ArrowBackIos />} onClick={toggleDrawer(false)} sx={{ mb: 2, '&:hover': { backgroundColor: 'transparent' }, '&:active': { backgroundColor: 'transparent' }, '& .MuiTouchRipple-root': { display: 'none' } }}>
        {drawermenutext1}
      </Button>

      {/* USER PROFILE CARD */}
      <Card style={{ maxWidth: 350 }}>
        <Stack direction="row" spacing={2} p={2}>
          <Avatar src={userData ? userData.picture : null} />
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
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right' disableScrollLock={true}>
        {DrawerList}
      </Drawer>
    </div>
  );
}