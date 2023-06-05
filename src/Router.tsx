import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './views/Index';
import Slug from './views/Slug';
import Share from './views/Share';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/audio/:slug' element={<Slug />} />
        <Route path='/share' element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
