import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Wrapper, Title, Text } from './HomeContent.styled';

export const HomeContent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Title>
        Welcome to your <br /> personal phonebook
      </Title>
      <Text>Here you can manage your contacts</Text>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrapper>
  );
};
