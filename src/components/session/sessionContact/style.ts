import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2rem;
    padding: 10px;
    text-align: center;
  }

  h2 {
    font-size: 1.4rem;
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
    h1 {
      font-size: 1.4rem;
      text-align: center;
    }
    h2 {
      font-size: 1rem;
      text-align: justify;
    }
  }
`;
