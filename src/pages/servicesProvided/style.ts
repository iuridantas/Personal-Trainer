import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    margin: 40px 0 15px 0;
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0 10px 0;
      font-size: 1.4rem;
    }
  }
`;
