import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px 0;
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0 0 0;
      font-size: 2rem;
    }
  }
`;

export const Section1 = styled.div`
  display: flex;
  margin: 20px;

  img {
    width: 400px;
    height: 400px;
    margin: 0 10px;
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
    margin: 10px;

    img {
      width: 400px;
      height: 300px;
    }

    h2 {
      text-align: justify;
      margin: 0 12px;

      p {
        margin: 20px 0;
      }
    }
  }
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 30px;

  h2 {
    font-size: 2.5rem;
    text-align: center;

    p {
      margin: 10px 0 30px 0;
      text-align: justify;
      font-size: 1.5rem;
    }
  }

  h2:last-of-type {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    margin: 10px;
  }
`;
