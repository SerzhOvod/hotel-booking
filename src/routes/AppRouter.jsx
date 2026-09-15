import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Hotels from '../pages/Hotels/Hotels';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  );
}

export default AppRouter;
