import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  Label,
  Input,
  Button,
  Section,
  Title,
  Text,
  StyledLink,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Title>Log in to your account</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Text>
          <p>Don't have an account?</p>
          <StyledLink to="/register">Register</StyledLink>
        </Text>
        <Button type="submit">Login</Button>
      </Form>
    </Section>
  );
};
