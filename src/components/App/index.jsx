import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Registration } from '../Registration';
import { Authorization } from '../Authorization';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Filter } from '../Filtr';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/registration', element: <Registration /> },
  { path: '/authorization', element: <Authorization /> },
  { path: '/filtr', element: <Filter /> },
]);

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
