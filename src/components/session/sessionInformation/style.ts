import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    margin: 30px 40px 10px;
  }

  h3 {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
  }

  span {
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    a {
      font-size: 1rem;
      margin: 5px 0;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
