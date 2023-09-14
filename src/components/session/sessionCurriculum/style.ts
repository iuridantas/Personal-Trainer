import styled from 'styled-components';

export const CurriculumSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;

  h2 {
    font-size: 32px;
    text-align: center;
    margin: 5px auto;
  }

  p {
    font-size: 22px;
    margin: 5px auto;
    text-align: center;
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
      font-size: 1.4rem;
    }

    p {
      font-size: 16px;
    }

    li {
      font-size: 16px;
    }
  }
`;
