import styled from 'styled-components';

export const FunctionOnlineSession = styled.div`
  h3 {
    font-size: 32px;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  h2 {
    display: flex;
    font-size: 32px;
    margin: 20px auto;
    justify-content: center;
  }

  p {
    font-size: 22px;
    text-align: justify;
    margin: 15px auto;
    line-height: 1.5;
  }

  span {
    margin-right: 5px;
  }

  @media only screen and (max-width: 600px) {
    h3 {
      justify-content: center;
      font-size: 22px;
    }

    h2 {
      text-align: justify;
      font-size: 22px;
      margin: 20px auto;
    }

    p {
      font-size: 16px;
    }
  }
`;
