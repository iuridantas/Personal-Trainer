import styled from 'styled-components';

export const ContactSection = styled.div`
  h1 {
    font-size: 2rem;
    padding: 7px;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    padding: 5px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
    h1 {
      font-size: 1.4rem;
      text-align: center;
    }
    p {
      font-size: 1rem;
      text-align: justify;
    }
  }
`;
