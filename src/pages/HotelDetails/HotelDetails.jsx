import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Rating,
  Typography,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotels = useSelector(state => state.hotels.items);
  const loading = useSelector(state => state.hotels.loading);
  const error = useSelector(state => state.hotels.error);

  const hotel = hotels.find(item => String(item.id) === id);

  if (loading && !hotel) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography>Loading hotel...</Typography>
      </Container>
    );
  }

  if (error && !hotel) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography color="error">{error}</Typography>

        <Button sx={{ mt: 2 }} onClick={() => navigate('/hotels')}>
          Back to hotels
        </Button>
      </Container>
    );
  }

  if (!hotel) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Hotel not found
        </Typography>

        <Button variant="outlined" onClick={() => navigate('/hotels')}>
          Back to hotels
        </Button>
      </Container>
    );
  }

  // Поддержка разных вариантов названий полей изображений
  const images = [
    ...(Array.isArray(hotel.images) ? hotel.images : []),
    hotel.image_url,
    hotel.image,
  ].filter(Boolean);

  const amenities = Array.isArray(hotel.amenities) ? hotel.amenities : [];

  const mainImage = images[0];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Back button */}
      <Button onClick={() => navigate('/hotels')} sx={{ mb: 3 }}>
        ← Back to hotels
      </Button>

      {/* Hotel title */}
      <Box sx={{ mb: 3 }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          {hotel.name}
        </Typography>

        <Rating
          value={Number(hotel.hotel_rating) || 0}
          precision={0.5}
          readOnly
          sx={{ mb: 1 }}
        />

        <Typography color="text.secondary">
          {hotel.address}
          {hotel.city ? `, ${hotel.city}` : ''}
          {hotel.state ? `, ${hotel.state}` : ''}
        </Typography>
      </Box>

      {/* Photo gallery */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '2fr 1fr',
          },
          gap: 2,
          mb: 5,
        }}
      >
        {/* Main image */}
        <Box
          sx={{
            height: { xs: 240, md: 400 },
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#eeeeee',
          }}
        >
          {mainImage ? (
            <Box
              component="img"
              src={mainImage}
              alt={hotel.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography color="text.secondary">Hotel image</Typography>
            </Box>
          )}
        </Box>

        {/* Additional images */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            gridTemplateRows: '1fr 1fr',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {[1, 2].map(index => {
            const image = images[index];

            return (
              <Box
                key={index}
                sx={{
                  height: { xs: 180, md: 'auto' },
                  minHeight: 0,
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#eeeeee',
                }}
              >
                {image ? (
                  <Box
                    component="img"
                    src={image}
                    alt={`${hotel.name} ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Photo {index + 1}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '2fr 1fr',
          },
          gap: 4,
        }}
      >
        {/* Hotel information */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            About this hotel
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
            {hotel.description || 'No description available.'}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Amenities
          </Typography>

          {amenities.length > 0 ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {amenities.map((amenity, index) => (
                <Chip
                  key={`${amenity}-${index}`}
                  label={amenity}
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Box>
          ) : (
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              No amenities information available.
            </Typography>
          )}
        </Box>

        {/* Contact information */}
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            height: 'fit-content',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Contact information
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Address
          </Typography>

          <Typography sx={{ mb: 3 }}>
            {hotel.address}
            {hotel.city ? `, ${hotel.city}` : ''}
            {hotel.state ? `, ${hotel.state}` : ''}
          </Typography>

          {hotel.phone_number && (
            <>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Phone
              </Typography>

              <Typography sx={{ mb: 3 }}>{hotel.phone_number}</Typography>
            </>
          )}

          <Divider sx={{ mb: 3 }} />

          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate('/hotels')}
            sx={{ borderRadius: 0 }}
          >
            Back to hotels
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default HotelDetails;
