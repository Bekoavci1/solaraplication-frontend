import React from 'react'
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export default function AddCustomer() {
  return (
    <Grid container spacing={2}>
  <Grid item xs={4} md={4}>
    <Box sx={{ display: 'flex',background:'blue', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Customer Information</h1>
    </Box>
  </Grid>
  <Grid item xs={8} md={8}>
    <Box sx={{ display: 'flex', background:'blue',justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Map</h1>
    </Box>
  </Grid>
  
</Grid>
  )
}
