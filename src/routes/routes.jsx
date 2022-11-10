import React from 'react';
import { HOME_ROUTE, ABOUT_ME_ROUTE } from '../utils/constants';
import { Home } from '../pages/Home';
import { AboutMe } from '../components/AboutMe/AboutMe';

export const routes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ABOUT_ME_ROUTE,
    element: <AboutMe />,
  },
];
