import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  max-width: 300px;
  max-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  gap: 15px;
  align-items: center;
  border: 3px dashed #526d82;
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
