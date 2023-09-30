import styled from 'styled-components';

export const Form = styled.form`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  gap: 15px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  border: 1px solid #526d82;
  border-radius: 3px;
  outline: none;
  padding: 4px;
`;
