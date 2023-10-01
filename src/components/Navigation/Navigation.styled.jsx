import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px 12px;
  font-weight: 700;
  color: #27374d;

  &.active {
    color: #526d82;
  }

  &:hover,
  &:focus {
    color: #526d82;
  }
`;
