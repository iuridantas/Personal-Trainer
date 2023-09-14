import styled from 'styled-components';

export const ModalitySession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;

  h2 {
    font-size: 32px;
    margin: 20px auto;
    text-align: center;
  }

  p {
    font-size: 22px;
    margin: 0 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    text-align: center;
    width: 320px;
    box-shadow: 1px 1px 10px black;
    border-radius: 8px;
  }

  div {
    display: flex;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin: 10px auto;
    }
    p {
      margin: 10px 20px;
      font-size: 16px;
      padding: 5px;
    }

    div {
      flex-direction: column;
    }
  }
`;
