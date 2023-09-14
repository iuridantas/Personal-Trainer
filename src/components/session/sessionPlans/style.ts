import styled from 'styled-components';

export const PlansSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  h2 {
    font-size: 32px;
    text-align: center;
    margin: 0 20px;
  }

  p {
    margin: 10px 30px 10px 20px;
    text-align: justify;
    font-size: 22px;
    line-height: 1.5;
  }

  h2:last-of-type {
    font-size: 32px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin: auto;
    }

    p {
      margin: 10px auto;
      font-size: 16px;
    }

    h2:last-of-type {
      font-size: 22px;
    }
  }
`;
