import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const HomeContent = () => {
  const { IsLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to your personal phonebook</h1>
      <div>{IsLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};
