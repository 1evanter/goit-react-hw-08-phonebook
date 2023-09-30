import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
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
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-top: 3px;
  border: 1px solid #526d82;
  border-radius: 3px;
  outline: none;
  padding: 4px;
`;

export const Button = styled.button`
  color: #27374d;
  background-color: #dde6ed;
  border: 1px solid #526d82;
  border-radius: 3px;
  padding: 3px;
  min-width: 80px;
`;
