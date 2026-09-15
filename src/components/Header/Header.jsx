import { Box, Button, Container, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1510px',
          minHeight: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            component={NavLink}
            to="/"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#f9a000',
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#f9a000',
            }}
          >
            Booking
          </Typography>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
          }}
        >
          <Button
            component={NavLink}
            to="/"
            variant="contained"
            sx={{
              backgroundColor: '#f9a000',
              borderRadius: 0,
              minWidth: 60,
              '&:hover': {
                backgroundColor: '#e89100',
              },
            }}
          >
            HOME
          </Button>

          <Button
            component={NavLink}
            to="/about"
            variant="contained"
            sx={{
              backgroundColor: '#f9a000',
              borderRadius: 0,
              minWidth: 65,
              '&:hover': {
                backgroundColor: '#e89100',
              },
            }}
          >
            ABOUT
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
