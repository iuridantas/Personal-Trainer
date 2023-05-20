import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 0 20px;

    p {
      margin: 10px 8px 15px 0;
      text-align: justify;
      font-size: 1.4rem;
    }
  }

  h2:last-of-type {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
      p {
        margin: 20px auto;
        font-size: 1rem;
      }
    }
    h2:last-of-type {
      font-size: 1.4rem;
    }
  }
`;
