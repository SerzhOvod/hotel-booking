import Box from '@mui/material/Box';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        <AppRouter />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
