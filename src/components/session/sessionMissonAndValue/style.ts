import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 5px 0;

    p {
      font-size: 1.4rem;
      margin: 10px auto;
      text-align: justify;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;

      p {
        font-size: 1rem;
      }
    }
  }
`;
