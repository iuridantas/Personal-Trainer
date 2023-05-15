import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
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
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
    h1 {
      font-size: 1.4rem;
      text-align: center;
    }
    h2 {
      font-size: 1rem;
      text-align:justify;
    }
  }
`;

export const ContainerContact = styled.div`
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

  h3{
    display: flex;
    font-size: 1.4rem;
    align-items: center;
  }

  span{
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    a {
      font-size: 1rem;
      margin: 5px 0;
    }
    h3{
      font-size: 1rem;
    }
  }
`;
