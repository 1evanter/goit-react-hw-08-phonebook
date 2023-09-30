import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
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
  min-width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  color: #fff;
  background-color: #27374d;
  border: 2px solid #27374d;
  border-radius: 3px;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #526d82;
    background-color: #dde6ed;
    color: #27374d;
  }
`;
