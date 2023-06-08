import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 0 20px;
  }

  p {
    margin: 10px 30px 10px 20px;
    text-align: justify;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  h2:last-of-type {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    p {
      margin: 10px auto;
      font-size: 1rem;
    }

    h2:last-of-type {
      font-size: 1.4rem;
    }
  }
`;
