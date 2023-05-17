import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 20px auto;
    text-align: center;
  }
  h3 {
    font-size: 1.2rem;
    text-align: justify;
    margin: 10px auto;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
