import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px black;
  padding: 10px 20px 10px 20px;
  margin: 219px auto;
  max-width: 1440px;

  @media (max-width: 600px) {
    margin: 24% auto;
  }
`;
