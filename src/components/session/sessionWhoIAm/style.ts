import styled from 'styled-components';

export const WhoIAmSession = styled.div`
  display: flex;
  margin: 40px 0 15px 0;

  h1 {
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    margin: 40px auto;
    text-align: justify;
    line-height: 1.5;
  }

  img {
    width: 500px;
    height: 400px;
    margin: 0 50px 0 0;
    box-shadow: 10px 10px 20px black;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 20px 0 0 0;

    img {
      width: auto;
      height: 300px;
      margin: 0 0 10px 0;
    }

    h1 {
      margin: 20px auto;
      font-size: 1.4rem;
    }

    p {
      margin: 20px auto;
      font-size: 1rem;
    }
  }
`;
