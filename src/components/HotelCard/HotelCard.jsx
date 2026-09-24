import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleViewHotel = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Box
        sx={{
          height: 180,
          overflow: 'hidden',
          backgroundColor: '#eeeeee',
        }}
      >
        {hotel.images?.[0] || hotel.image_url || hotel.image ? (
          <Box
            component="img"
            src={hotel.images?.[0] || hotel.image_url || hotel.image}
            alt={hotel.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
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
              Hotel image
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 1, fontWeight: 600 }}>
          {hotel.name}
        </Typography>

        <Box sx={{ mb: 1.5 }}>
          <Rating
            value={hotel.hotel_rating || 0}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {hotel.address}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {hotel.city}
          {hotel.state ? `, ${hotel.state}` : ''}
        </Typography>

        {hotel.phone_number && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">{hotel.phone_number}</Typography>
          </>
        )}

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleViewHotel}
            sx={{ borderRadius: 0 }}
          >
            VIEW HOTEL
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
