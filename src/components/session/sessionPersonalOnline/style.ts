import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2rem;
    margin: 30px 0 20px 0;
    text-align: center;
  }
  h2 {
    font-size: 1.4rem;
    text-align: justify;
    margin: 15px auto;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0 0 0;
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;
