import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Suspense } from 'react';

export const Layout = () => (
  <div>
    <AppBar />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <GlobalStyle />
  </div>
);
