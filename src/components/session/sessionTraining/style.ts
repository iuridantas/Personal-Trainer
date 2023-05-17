import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 20px;

  img {
    width: 400px;
    height: 400px;
    margin: 0 20px;
  }

  h2 {
    text-align: justify;
    margin: 0 30px;

    p {
      margin: 10px 0 30px 0;
      font-size: 1.5rem;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 320px;
      height: 300px;
      margin: auto;
    }

    h2 {
      text-align: justify;
      margin: auto;

      p {
        margin: 10px;
        font-size: 1rem;
      }
    }
  }
`;
