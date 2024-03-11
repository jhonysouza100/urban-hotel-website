import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  maxWidth: 280,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;
 
 const message2 = 'jhonatansouzameza100@gmail.com'

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar>W</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
      <Item sx={{ my: 1, mx: 'auto', p: 2, }} >
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar>W</Avatar>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap sx={{fontWeight: 500}}>Jhony Souza</Typography>
            <Typography noWrap color="gray">{message2}</Typography></Stack>
        </Stack>
      </Item>
    </Box>
  );
}