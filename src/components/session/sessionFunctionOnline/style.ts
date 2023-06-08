import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  h2:first-of-type {
    display: flex;
    font-size: 2rem;
    margin: 20px auto;
    justify-content: center;
  }

  p {
    font-size: 1.4rem;
    text-align: justify;
    margin: 15px auto;
    line-height: 1.5;
  }

  span {
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    h2 {
      justify-content: center;
      font-size: 1.4rem;
    }

    h2:first-of-type {
      text-align: justify;
      font-size: 1.4rem;
      margin: 20px auto;
    }

    p {
      font-size: 1rem;
    }
  }
`;
