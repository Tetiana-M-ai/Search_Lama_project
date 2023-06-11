import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Home } from './pages/Home/index';
import { Registration } from './pages/Registration/index';
import { Authorization } from './pages/Authorization/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Filter } from './pages/Filtr';
import { Layout } from './components/Layout/index';
import { Cars } from './pages/Cars';
import { Tickets } from './pages/Tickets';
import { HousesResults, loader } from './pages/HousesResults';
import { UserPage } from './pages/UserPage';
import { UserProvider } from './contexts/userContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/registration',
    element: (
      <Layout>
        <Registration />
      </Layout>
    ),
  },
  {
    path: '/authorization',
    element: (
      <Layout>
        <Authorization />
      </Layout>
    ),
  },
  {
    path: '/filtr',
    element: (
      <Layout>
        <Filter />
      </Layout>
    ),
  },
  {
    path: '/cars',
    element: (
      <Layout>
        <Cars />
      </Layout>
    ),
  },
  {
    path: '/concerts',
    element: (
      <Layout>
        <Tickets />
      </Layout>
    ),
  },
  {
    path: '/houses-results',
    element: (
      <Layout>
        <HousesResults />
      </Layout>
    ),
    loader: loader,
  },
  {
    path: '/user',
    element: (
      <Layout>
        <UserPage />
      </Layout>
    ),
  },
]);

createRoot(document.querySelector('#app')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
);
