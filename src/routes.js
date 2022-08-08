import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Index from './pages/inicio';
import Series from './pages/series';
import Movies from './pages/movies';
import Latest from './pages/latest';

function AppRoutes(){
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/Series' exact element={<Series/>}/>
        <Route path='/Movies' exact element={<Movies/>}/>
        <Route path='/Latest' exact element={<Latest/>}/>
    </Routes>
    </BrowserRouter>
  );   
};

export default AppRoutes;