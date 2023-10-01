import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  display: block;
  margin: 30px auto 50px;
  font-size: 46px;
`;

export const Section = styled.section`
  width: 360px;
  height: 450px;
  padding: 15px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.6);
  }
`;
