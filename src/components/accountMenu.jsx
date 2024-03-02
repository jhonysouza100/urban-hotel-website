import { useContext, useState } from 'react';
import AppContext from '../context/context';
import { AuthButton } from '../hooks/useAuth';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Login } from '@mui/icons-material';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

export default function AccountMenu(props) {
  const { toggleDrawer, appTexts} = useContext(AppContext);
  const {accountmenutext1, accountmenutext2, accountmenutext3} = appTexts;
  const { userData } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      <Tooltip title={accountmenutext3}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src={userData ? userData.picture : null}
           sx={{ 
            width: { xs: 32, md: 40 }, // Tamaño condicional basado en el ancho de la pantalla
            height: { xs: 32, md: 40 }, // Tamaño condicional basado en el ancho de la pantalla
          }} alt='profile-image' />

        </IconButton>
      </Tooltip>
    
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() =>{ handleClose; toggleDrawer(true)(); }} disabled={userData ? false : true}><Avatar alt='profile-image' src={userData ? userData.picture : null} /> {accountmenutext1}</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}><ListItemIcon><Settings fontSize="small" /></ListItemIcon>{accountmenutext2}</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon>{userData ? <Logout fontSize="small" /> : <Login fontSize="small" />}</ListItemIcon><AuthButton /></MenuItem>
      </Menu>

    </>
  );
}