import { useContext } from 'react';
import AppContext from '../context/context';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button, Card, Stack, Typography } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

export default function AccountDrawer(props) {
  const {toggleDrawer, openDrawer, appTexts} = useContext(AppContext);
  const {drawermenutext1} = appTexts;
  const { userData} = props;  

  const DrawerList = (
    <Box sx={{ width: {xs: "100vw", sm: "50vw", lg: "35vw"}}} role="presentation" padding={2}>

      <Button variant="text" startIcon={<ArrowBackIos />} onClick={toggleDrawer(false)} sx={{marginBottom: 1}} >
        {drawermenutext1}
      </Button>

      <Card style={{ maxWidth: 350 }}>
        <Stack direction="row" spacing={2} p={2}>
          <Avatar src={userData ? userData.picture : null} />
          <Box>
            <Typography component="div" size="2" weight="bold">{userData ? userData.username : null}</Typography>
            <Typography component="div" size="2" color="gray">{userData ? userData.email : null}</Typography>
          </Box>
        </Stack>
      </Card>

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

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