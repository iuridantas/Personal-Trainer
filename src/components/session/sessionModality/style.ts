import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 0 60px;
    box-shadow: 1px 1px 10px black;
    padding: 10px;
    text-align: center;
  }

  div {
    display: flex;
    margin: 0 0 20px 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      margin: 10px auto;
    }
    p {
      margin: 20px 10px;
      font-size: 1rem;
      padding: 5px;
    }

    div {
      flex-direction: column;
    }
  }
`;
