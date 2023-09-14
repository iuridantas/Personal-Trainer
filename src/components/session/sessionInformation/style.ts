import styled from 'styled-components';

export const InformationSession = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 22px;
    margin: 30px 40px 10px;
  }

  h3 {
    display: flex;
    font-size: 22px;
    align-items: center;
    font-weight: bold;
  }

  p {
    display: flex;
    font-size: 22px;
    align-items: center;
    font-weight: bold;
  }

  span {
    margin-right: 5px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    a {
      font-size: 16px;
      margin: 5px 0;
    }

    p {
      font-size: 16px;
    }

    h3{
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    flex-direction: column;
  }
`;
