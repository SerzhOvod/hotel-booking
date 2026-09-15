// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
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

      <main>
        <h1>Hotel Booking</h1>
        <p>React diploma project</p>
      </main>
    </div>
  );
}

export default App;
