import React from 'react'
import { Grid, Typography, Card, CardMedia } from '@mui/material';
import categories from './categories'

function Categories() {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'center', m: 1 }}>Our Top Categories</Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {
          categories.map((items) => (
            <Card key={items.id} sx={{
              maxWidth: 120, borderRadius: '1rem', m: 2, cursor: 'pointer', '&:hover': {
                // transform: 'translateY(-1rem)',
                transition: 'transform 0.5s ease',
                transform: 'scale(1.1)'
              }
            }}>
              <Typography variant="body2" sx={{ color: 'white', marginBottom: '-3rem', textAlign: 'center' }}>{items.name}</Typography>
              <CardMedia
                sx={{ height: 160, width: 120, backgroundColor: 'khaki' }}
                image={items.img}
                alt="Category"
              />
            </Card>
          ))
        }
      </Grid>
    </>
  )
}

export default Categories