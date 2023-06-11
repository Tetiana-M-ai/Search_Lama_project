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
import { Concerts } from './pages/Concerts';
import { HousesResults } from './pages/HousesResults';
import { Credit } from './pages/Credit';

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
        <Concerts />
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
  },
  {
    path: '/credit',
    element: (
      <Layout>
        <Credit />
      </Layout>
    ),
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
