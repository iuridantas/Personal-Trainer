import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
  }

  h2 {
    font-size: 1.4rem;
    text-align: center;
    padding: 10px;
    margin: 0 200px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      margin: 10px auto;
    }

    h2 {
      font-size: 1rem;
      margin: auto;
      text-align: justify;
    }

    h2:last-of-type {
      font-size: 1rem;
      margin: auto;
      text-align: center;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;