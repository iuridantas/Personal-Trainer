import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 40px auto;

  h1 {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 2.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 20px auto;
    text-align: justify;
  }

  img {
    width: 500px;
    height: 400px;
    margin: 0 50px 0 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 20px auto;

    img {
      width: 320px;
      height: 300px;
      margin: auto;
    }

    h1 {
      margin: 20px auto;
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;
