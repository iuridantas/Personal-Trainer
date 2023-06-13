import styled from 'styled-components';

export const ObjectiveSession = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 10px 80px;
  }

  h2 {
    font-size: 2rem;
    margin: 20px 0 10px 0;
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
  width: 50%;
  display: flex;

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
