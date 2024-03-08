import { useContext } from 'react';
import AppContext from '../context/context';
import { ArrowBackIos } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function BackButton(props) {
  const {action} = props;
  const {appTexts} = useContext(AppContext);
  const {backbuttontext1} = appTexts;

  return (
      <Button variant="text" startIcon={<ArrowBackIos />} onClick={action} sx={{'&:hover': { backgroundColor: 'transparent' }, '&:active': { backgroundColor: 'transparent' }, '& .MuiTouchRipple-root': { display: 'none' } }}>
      {backbuttontext1}
      </Button>
  );
}