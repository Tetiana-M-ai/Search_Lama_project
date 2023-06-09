import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Home } from './components/Home/index';
import { Registration } from './components/Registration/index';
import { Authorization } from './components/Authorization/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Filter } from './components/Filtr';
import { Layout } from './components/Layout/index';

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
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
