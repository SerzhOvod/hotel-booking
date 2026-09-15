import { Box, Container, Divider, Typography } from '@mui/material';

function About() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <Box sx={{ maxWidth: 900 }}>
        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          About
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 }}>
          Find the perfect hotel for your stay
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.8,
          }}
        >
          Our hotel search application helps you find accommodation in popular
          destinations. Select your destination, choose your travel dates and
          specify the number of guests to see available hotels.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.8,
          }}
        >
          The application uses a modern React-based architecture with Redux,
          Redux-Saga, Axios, Express and Material UI.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h5" sx={{ mb: 2 }}>
          Technologies
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: 3,
            color: 'text.secondary',
            lineHeight: 2,
          }}
        >
          <li>React</li>
          <li>Vite</li>
          <li>React Router</li>
          <li>Material UI</li>
          <li>React Final Form</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Axios</li>
          <li>Express JS</li>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
