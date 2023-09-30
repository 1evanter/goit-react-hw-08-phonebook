import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => (
  <div>
    <AppBar />
    <Outlet />
  </div>
);
