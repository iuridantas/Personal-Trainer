import styled from 'styled-components';

export const ObjectiveSession = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;

  h2 {
    font-size: 32px;
    margin: 20px auto;
    text-align: center;
  }

  p {
    margin-top: 10px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }

  img {
    width: 300px;
    height: 168px;
    box-shadow: 10px 10px 20px black;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      margin: 20px 15px;
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    div {
      margin: 10px auto;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 90px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
