// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <Header />

      {/* <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/about" element={<About />} />
           <Route path="/hotels" element={<Hotels />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
     </> */}

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;
