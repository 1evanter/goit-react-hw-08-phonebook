import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px auto 0;
  padding: 30px 15px;
  height: 400px;
`;

export const Title = styled.h2`
  margin-top: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
    border: 2px solid #526d82;
  }
`;

export const Button = styled.button`
  min-width: 192px;
`;
