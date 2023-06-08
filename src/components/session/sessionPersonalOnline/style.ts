import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2rem;
    margin: 30px 0 20px 0;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    text-align: justify;
    margin: 15px auto;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0 0 0;
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
