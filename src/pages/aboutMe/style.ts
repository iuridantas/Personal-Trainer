import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Section1 = styled.div`
  display: flex;
  margin: 40px auto;

  h1 {
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;

    p {
      font-size: 1.5rem;
      margin: 20px auto;
      text-align: justify;
    }
  }

  img {
    width: 500px;
    height: 400px;
    margin: 0 50px 0 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 20px auto;

    img {
      width: 320px;
      height: 300px;
      margin: auto;
    }

    h1 {
      margin: 20px auto;
      font-size: 2rem;

      p {
        font-size: 1.4rem;
      }
    }
  }
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;

  h2 {
    font-size: 1.5rem;
    text-align: center;

    p {
      font-size: 1.2rem;
      margin: 10px auto;
    }
  }
`;
export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;

  h2 {
    font-size: 2rem;
    text-align: center;

    p {
      font-size: 1.4rem;
      margin: 10px auto;
      text-align: justify;
    }
  }
`;
