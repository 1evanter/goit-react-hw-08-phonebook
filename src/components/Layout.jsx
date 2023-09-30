import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => (
  <div>
    <AppBar />
    <Outlet />
    <GlobalStyle />
  </div>
);
