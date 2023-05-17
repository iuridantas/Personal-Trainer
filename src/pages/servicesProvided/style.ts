import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px 0 20px 0;
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      margin: 20px 0;
      font-size: 1.6rem;
    }
  }
`;
