import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Suspense } from 'react';

export const Layout = () => (
  <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
    <AppBar />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <GlobalStyle />
  </div>
);
