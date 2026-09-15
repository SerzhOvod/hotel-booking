import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from '@mui/material';

function HotelCard({ hotel }) {
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eeeeee',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Hotel image
        </Typography>
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            mb: 1,
            fontWeight: 600,
          }}
        >
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

        <Box
          sx={{
            mt: 'auto',
            pt: 2,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 0,
            }}
          >
            VIEW HOTEL
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
