import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  color: #27374D;
    margin: 0;
  background-image: url("https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-repeat: no-repeat;
  background-size: cover;
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

section {
  width: 320px;
border-radius: 4px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`;
