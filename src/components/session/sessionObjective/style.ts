import styled from 'styled-components';

export const ObjectiveSession = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;

  h2 {
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
  }

  p {
    margin-top: 10px;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
  }

  img {
    width: 300px;
    height: 168px;
    box-shadow: 10px 10px 20px black;
  }

  @media (max-width: 600px) {
    h2 {
      margin: 20px 15px;
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
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

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
