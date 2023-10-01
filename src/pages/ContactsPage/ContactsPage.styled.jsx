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
  font-size: 50px;
`;

export const Section = styled.section`
  width: 360px;
  height: 450px;
  padding: 15px;
  border: 3px dashed #526d82;
  overflow: auto;
`;
