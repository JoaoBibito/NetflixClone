import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Index from './pages/inicio';
import Series from './pages/series';

function AppRoutes(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/Series' exact element={<Series/>}/>
    </Routes>
    </BrowserRouter>
  );   
};

export default AppRoutes;