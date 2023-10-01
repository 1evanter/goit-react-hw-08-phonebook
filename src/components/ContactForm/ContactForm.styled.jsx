import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  width: 300px;
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 65px 15px;
  gap: 15px;
  align-items: center;
  border-radius: 4px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  margin-top: 3px;
  padding: 4px;

  border: 2px solid #9db2bf;
  border-radius: 3px;
  outline: none;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #27374d;
  }
`;

export const Button = styled.button`
  min-width: 192px;
`;
