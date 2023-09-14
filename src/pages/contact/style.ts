import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px black;
  padding: 10px 20px 10px 20px;
  margin: 12.3% auto;
  max-width: 1440px;

  @media only screen and (max-width: 600px) {
    margin: 24% auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 900px){
    margin: 24% auto;
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    margin: 431px auto;
  }
`;
