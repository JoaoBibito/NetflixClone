import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Index from './pages/inicio';
import Series from './pages/series';
import Movies from './pages/movies';

function AppRoutes(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/Series' exact element={<Series/>}/>
        <Route path='/Movies' exact element={<Movies/>}/>
    </Routes>
    </BrowserRouter>
  );   
};

export default AppRoutes;