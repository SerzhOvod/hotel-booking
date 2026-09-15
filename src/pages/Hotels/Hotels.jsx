import { Container, Grid, Typography } from '@mui/material';

import HotelCard from '../../components/HotelCard/HotelCard';

const hotels = [
  {
    id: 1,
    name: 'Woogo Central Park - Tempo Apartments',
    address: '240 West 73rd Street',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
  {
    id: 2,
    name: 'Amolite Hotel',
    address: 'Avenida Curitiba, 811',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
  {
    id: 3,
    name: 'Redford Hotel',
    address: '136 Ludlow Street',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
  {
    id: 4,
    name: 'Hotel Richland New York',
    address: '5 Allen Street',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
  {
    id: 5,
    name: 'Studio Lux Times Square',
    address: 'between 9 Avenue and 8 Avenue',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
  {
    id: 6,
    name: 'The Bowery Hotel',
    address: '335 Bowery',
    city: 'New York',
    state: 'NY',
    countryCode: 'US',
  },
];

function Hotels() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1000px',
        py: 2,
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: '22px',
          fontWeight: 400,
          mb: 1,
        }}
      >
        Hotels
      </Typography>

      <Grid container spacing={3}>
        {hotels.map(hotel => (
          <Grid
            key={hotel.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Hotels;
