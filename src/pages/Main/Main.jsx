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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
    </Box>
  );
}

export default Main;
