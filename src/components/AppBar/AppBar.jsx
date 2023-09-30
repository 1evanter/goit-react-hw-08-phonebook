import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
