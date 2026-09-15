import { Container, Typography, Box } from '@mui/material';

import SearchForm from '../../components/SearchForm/SearchForm';

function Main() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#fff',
        minHeight: 'calc(100vh - 140px)',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1200px',
          pt: 2.5,
          px: 2,
        }}
      >
        <SearchForm />

        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: '28px',
              md: '32px',
            },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          Travel With{' '}
          <Box
            component="span"
            sx={{
              color: '#f9a000',
            }}
          >
            Booking
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: '#333',
          }}
        >
          Find the perfect place to stay for your next trip. Choose your
          destination, select your travel dates, and find hotels that match your
          plans. Make your journey comfortable and enjoy every moment of your
          stay.
        </Typography>
      </Container>
    </Box>
  );
}

export default Main;
