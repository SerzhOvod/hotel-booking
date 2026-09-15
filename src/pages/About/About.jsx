import { Box, Button, Container, Typography } from '@mui/material';

function About() {
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
          About
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: '#333',
          }}
        >
          Our service helps you find comfortable hotels...
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
