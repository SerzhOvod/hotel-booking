import { Box, Container, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import HotelCard from '../../components/HotelCard/HotelCard';

function Hotels() {
  const hotels = useSelector(state => state.hotels.items);

  const search = useSelector(state => state.hotels.search);

  const loading = useSelector(state => state.hotels.loading);

  const error = useSelector(state => state.hotels.error);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Hotels
        </Typography>

        {search?.destination && (
          <Typography variant="body1" color="text.secondary">
            Search results for <strong>{search.destination.label}</strong>
          </Typography>
        )}
      </Box>

      {loading && <Typography>Loading hotels...</Typography>}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && hotels.length === 0 && (
        <Typography color="text.secondary">No hotels found.</Typography>
      )}

      {!loading && !error && hotels.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Hotels;
