import { useContext, useState } from 'react';
import AppContext from '../../../../context/context';
import PropTypes from 'prop-types';
import CommentIcon from '@mui/icons-material/Comment';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PaymentIcon from '@mui/icons-material/Payment';
import { Alert, Box, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import Review from './tabs/reviews';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabMenu() {
  const [tabValue, setTabValue] = useState(0);

  const {appTexts} = useContext(AppContext);
  const {tabmenutitle1, tabmenutitle2, tabmenutitle3, tabmenutextalert1} = appTexts;

  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  // Obtén el estado de la pantalla ancha usando useMediaQuery
  const isWideScreen = useMediaQuery('(min-width:600px)');
  
  return (
    <Stack flex="1" spacing={{ xs: 1, sm: 2, md: 4 }} direction={{xs: 'column', sm: 'row-reverse'}} justifyContent={{xs: 'space-between', sm: 'flex-end'}} >
      {/* alignItems="stretch"  useFlexGap flexWrap="wrap" */}
      <Box flex="1">
        <CustomTabPanel value={tabValue} index={0}><Review /></CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}><Alert severity="warning">{tabmenutextalert1}</Alert></CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}><Box>Próximamente</Box></CustomTabPanel>
      </Box>

      <Tabs value={tabValue} onChange={handleTabs} aria-label="basic tabs example" orientation={isWideScreen ? 'vertical' : 'horizontal'}> {/* Ajusta la orientación basándote en el ancho de la pantalla */}
        <Tab label={tabmenutitle1}{...a11yProps(0)} icon={<CommentIcon />} />
        <Tab label={tabmenutitle2}  {...a11yProps(1)} icon={<RoomServiceIcon />} />
        <Tab disabled label={tabmenutitle3}{...a11yProps(2)} icon={<PaymentIcon />} />
      </Tabs>

    </Stack>
  );
}
