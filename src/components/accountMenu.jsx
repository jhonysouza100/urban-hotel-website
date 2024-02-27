import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useContext, useState } from 'react';
import { Login } from '@mui/icons-material';
import { AuthButton } from '../hooks/useAuth';
import AppContext from '../context/context';

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
          <Avatar src={userData ? userData.picture : null} sx={{ width: 32, height: 32 }} />
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
        <MenuItem onClick={() =>{ handleClose; toggleDrawer(true)(); }} disabled={userData ? false : true}><Avatar src={userData ? userData.picture : null} /> {accountmenutext1}</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}><ListItemIcon><Settings fontSize="small" /></ListItemIcon>{accountmenutext2}</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon>{userData ? <Logout fontSize="small" /> : <Login fontSize="small" />}</ListItemIcon><AuthButton /></MenuItem>
      </Menu>

    </>
  );
}