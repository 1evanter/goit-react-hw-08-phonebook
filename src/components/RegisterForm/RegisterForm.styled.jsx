import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 30px auto;
  padding: 15px;
  gap: 15px;
  border: 3px dashed #526d82;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const Input = styled.input`
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
