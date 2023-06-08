import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 20px;

  img {
    width: 500px;
    height: 400px;
    margin: 0 20px;
    box-shadow: 10px 10px 20px black;
  }

  div {
    p {
      margin: 30px 30px;
      font-size: 1.4rem;
      text-align: justify;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: auto;
      height: 300px;
      margin: 0 0 10px 0;
    }

    div {
      text-align: justify;
      margin: auto;

      p {
        margin: 20px auto;
        font-size: 1rem;
      }
    }
  }
`;
