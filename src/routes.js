import React from 'react';
import { BrowserRouter,HashRouter  , Route, Routes } from 'react-router-dom';
import Index from './pages/inicio';
import Series from './pages/series';
import Movies from './pages/movies';
import Latest from './pages/latest';

function AppRoutes(){
  return (
    <HashRouter >
    <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/Series' exact element={<Series/>}/>
        <Route path='/Movies' exact element={<Movies/>}/>
        <Route path='/Latest' exact element={<Latest/>}/>
    </Routes>
    </HashRouter>
  );   
};

export default AppRoutes;