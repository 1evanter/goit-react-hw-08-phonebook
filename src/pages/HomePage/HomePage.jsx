import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to your personal phonebook</h1>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};

export default HomePage;
