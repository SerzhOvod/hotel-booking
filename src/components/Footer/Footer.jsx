import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        borderTop: '1px solid #eee',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 Booking
      </Typography>
    </Box>
  );
}

export default Footer;
