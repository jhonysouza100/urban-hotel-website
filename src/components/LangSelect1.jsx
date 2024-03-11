import { useContext, useRef, useState } from 'react';
import AppContext from '../context/context';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, ButtonGroup, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';

// import { FlagIcon } from "react-flag-kit";

// const USAFlag = () => <FlagIcon code="US" size={48} />;
// const ARFlag = () => <FlagIcon code="AR" size={48} />;
// const BRFlag = () => <FlagIcon code="BR" size={48} />;

// const flag = [USAFlag, ARFlag, BRFlag];

const options = ['ES', 'US', 'BR'];

export default function LangSelect() {

  const {handleLang} = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const selectedIndex = useRef(0);

  const handleMenuItemClick = (event, index) => {
    selectedIndex.current = index;
    handleLang(options[selectedIndex.current]);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{position: "absolute", top: "100px", right: "1rem", zIndex: "99"}}>
      <ButtonGroup 
        variant="text" 
        ref={anchorRef} 
        aria-label="Button group with a nested menu" >
        <IconButton 
          sx={{'&:hover': { backgroundColor: 'transparent' }, '&:active': { backgroundColor: 'transparent' }, '& .MuiTouchRipple-root': { display: 'none' }, minWidth: "35px", padding: "0", justifyContent: "flex-end", color: "var(--white-color)" }} 
          size="small">{options[selectedIndex.current]}</IconButton>
        <IconButton onClick={handleToggle}
          size="small" 
          sx={{color: "var(--white-color)"}}
          aria-controls={open ? 'split-button-menu' : undefined} 
          aria-expanded={open ? 'true' : undefined} 
          aria-label="select merge strategy" 
          aria-haspopup="menu" ><ArrowDropDownIcon /></IconButton>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex.current}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}