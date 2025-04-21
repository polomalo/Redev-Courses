import { Grid, Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Box
          sx={{
            width: '100%',
            height: 60,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        />
      </Grid>
      <Grid size={8}>
        <Box
          sx={{
            width: '100%',
            height: 60,
            borderRadius: 1,
            bgcolor: 'green',
            '&:hover': {
              bgcolor: 'black',
            },
          }}
        />
      </Grid>
      <Grid size={2}>
        <Box
          sx={{
            width: '100%',
            height: 60,
            borderRadius: 1,
            bgcolor: 'yellow',
            '&:hover': {
              bgcolor: 'black',
            },
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Header
