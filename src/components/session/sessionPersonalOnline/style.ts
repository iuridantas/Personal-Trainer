import styled from 'styled-components';

export const PersonalOnlineSession = styled.div`
  h1 {
    font-size: 32px;
    margin: 30px 0 20px 0;
    text-align: center;
  }

  p {
    font-size: 22px;
    text-align: justify;
    margin: 15px auto;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      margin: 20px 0 0 0;
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }
`;
