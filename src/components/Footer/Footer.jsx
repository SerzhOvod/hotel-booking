import { Box, Container, Divider, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
        }}
      >
        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Hotel Booking
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Find your perfect stay.
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Email: info@hotelbooking.com
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Phone: +1 800 123 4567
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 4,
            textAlign: 'center',
          }}
        >
          © 2026 Hotel Booking. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
