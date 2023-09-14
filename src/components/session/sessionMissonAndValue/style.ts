import styled from 'styled-components';

export const MissionValueSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;

  h2 {
    font-size: 32px;
    text-align: center;
    margin: 0 0 5px 0;
  }

  h2:last-of-type{
    margin: 10px 0 0 0;
  }

  p {
    font-size: 22px;
    margin: 5px auto;
    text-align: justify;
    line-height: 1.5;
  }

  li {
    font-size: 22px;
    margin: 5px auto;
    text-align: center;
    line-height: 1.5;
    list-style-type: none;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }

    li {
      font-size: 16px;
    }
  }
`;
