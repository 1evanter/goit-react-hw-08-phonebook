import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};
