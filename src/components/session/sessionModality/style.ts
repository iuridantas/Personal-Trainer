import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 0 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    text-align: center;
    width: 320px;
    box-shadow: 1px 1px 10px black;
    border-radius: 8px;
  }

  div {
    display: flex;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      margin: 10px auto;
    }
    p {
      margin: 10px 20px;
      font-size: 1rem;
      padding: 5px;
    }

    div {
      flex-direction: column;
    }
  }
`;
