import styled from 'styled-components';

export const Title = styled.div`
  h1 {
    margin: 40px 0 15px 0;
    font-size: 32px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      margin: 20px 5px;
      font-size: 22px;
    }
  }
`;

export const TrainingSession = styled.div`
  display: flex;
  margin: 0 20px;

  img {
    width: 500px;
    height: 400px;
    margin: 0 20px;
    box-shadow: 10px 10px 20px black;
  }

  p {
    margin: auto 30px;
    font-size: 22px;
    text-align: justify;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: auto;
      height: 300px;
      margin: 0 0 10px 0;
    }

    div {
      text-align: justify;
      margin: auto;

      p {
        margin: 20px auto;
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;

    img {
      height: auto;
      margin: 10px auto;
    }

    p {
      margin: 10px 20px;
    }
  }
`;
