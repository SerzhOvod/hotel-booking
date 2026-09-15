import { Card, CardContent, Typography, Box } from '@mui/material';

function HotelCard({ hotel }) {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 0,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box
        sx={{
          height: 120,
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa',
          fontSize: '22px',
        }}
      >
        140 x 140
      </Box>

      <CardContent
        sx={{
          padding: '12px 14px',
          '&:last-child': {
            paddingBottom: '12px',
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: '20px',
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          {hotel.name}
        </Typography>

        <Typography
          sx={{
            fontSize: '12px',
            color: '#777',
            lineHeight: 1.4,
          }}
        >
          address: {hotel.address}
        </Typography>

        <Typography
          sx={{
            fontSize: '12px',
            color: '#777',
            lineHeight: 1.4,
          }}
        >
          city: {hotel.city}, state: {hotel.state}, country code:{' '}
          {hotel.countryCode}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
