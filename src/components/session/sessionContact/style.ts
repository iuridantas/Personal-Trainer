import styled from 'styled-components';

export const ContactSection = styled.div`
  h1 {
    font-size: 32px;
    padding: 7px;
    text-align: center;
  }

  p {
    font-size: 22px;
    text-align: center;
    padding: 5px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 0;
    h1 {
      font-size: 22px;
      text-align: center;
    }
    p {
      font-size: 16px;
      text-align: justify;
    }
  }
`;
