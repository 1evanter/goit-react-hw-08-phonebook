import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  color: #27374D;
    margin: 0;
    font-family: 
};

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol,
a {
  margin: 0;
  padding: 0;
  list-style: none;
};

button {
  cursor: pointer;
   min-width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  color: #fff;
  background-color: #526d82;
  border: 2px solid #526d82;
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
}
`;
