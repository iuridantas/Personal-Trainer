import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  h2:first-of-type {
    display: flex;
    font-size: 1.8rem;
    margin: 20px auto;
    justify-content: center;
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
