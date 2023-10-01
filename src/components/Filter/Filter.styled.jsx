import styled from 'styled-components';

export const Form = styled.form`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  gap: 15px;
  max-height: 65px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  border: 2px solid #9db2bf;
  border-radius: 3px;
  outline: none;
  padding: 4px;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #526d82;
  }
`;
