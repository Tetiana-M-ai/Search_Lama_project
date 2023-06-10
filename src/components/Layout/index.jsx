import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { AuthProvider } from '../../contexts/authContexts';

export const Layout = ({ children }) => (
  <>
    <AuthProvider>
      <Header />
      {children}
      <Footer />
    </AuthProvider>
  </>
);
