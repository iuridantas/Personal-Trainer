import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px black;
  padding: 10px 20px 10px 20px;
  margin: 120px auto;
  h1 {
    font-size: 2.5rem;
    padding: 10px;
  }

  h2 {
    font-size: 1.4rem;
    text-align: justify;
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
    h1 {
      font-size: 1rem;
      text-align: center;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    margin: 30px 40px 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    a {
      font-size: 0.8rem;
      margin: 5px 0;
    }
  }
`;
