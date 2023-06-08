import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 5px auto;
  }

  p {
    font-size: 1.4rem;
    margin: 5px auto;
    text-align: center;
    line-height: 1.5;
  }

  li {
    font-size: 1.4rem;
    margin: 5px auto;
    text-align: center;
    line-height: 1.5;
    list-style-type: none;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }

    li {
      font-size: 1rem;
    }
  }
`;
