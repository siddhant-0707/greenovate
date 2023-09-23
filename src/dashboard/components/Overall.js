import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f8f4f4',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f8f4f4' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <h5>Your overall</h5>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item>Price Values</Item>
        </Grid>
        <Grid xs={10}>
          <Item>Category visuals</Item>
          <Item>Spend visuals</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
