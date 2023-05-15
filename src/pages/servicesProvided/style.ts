import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px 0 20px 0;
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0;
      font-size: 1.6rem;
    }
  }
`;

export const Section1 = styled.div`
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
      width: 300px;
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

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin: 0 20px;

    p {
      margin: 10px 8px 30px 0;
      text-align: justify;
      font-size: 1.5rem;
    }
  }

  h2:last-of-type {
    margin-bottom: 20px;
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.6rem;
      margin: auto;
      p {
        margin: 10px;
        font-size: 1rem;
      }
    }
    h2:last-of-type {
      font-size: 1.6rem;
  }
  }
`;
