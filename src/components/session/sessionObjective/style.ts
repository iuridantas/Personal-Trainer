import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    margin: 10px 80px;
  }

  h1 {
    font-size: 2rem;
    margin: 20px 0 10px 0;
    text-align: center;
  }

  h2 {
    margin-top: 5px;
    font-size: 1.4rem;
    text-align: center;
  }

  img {
    width: 300px;
    height: 168px;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 15px;
      font-size: 1.4rem;
    }
    h2 {
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
