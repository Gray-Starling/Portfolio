import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import './App.scss';
import { HeaderWrp } from './components/Header/HeaderWrp';

export function App() {
  return (
    <BrowserRouter>
      <HeaderWrp />
      <AppRouter />
    </BrowserRouter>
  );
}
