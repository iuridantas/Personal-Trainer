import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;

  h1 {
    font-size: 2.5rem;
    margin: 20px auto;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  h2:first-of-type {
    font-size: 1.8rem;
    margin: 20px auto;
  }

  h3 {
    font-size: 1.2rem;
    text-align: justify;
    margin: 10px auto;
  }

  span {
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h2:first-of-type {
      font-size: 1.4rem;
      margin: 20px auto;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
