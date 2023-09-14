import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: rgb(48 48 48);
  padding: 5px 0 0 0;
  color: #ffff97;

  p {
    font-size: 16px;
    padding: 4px 0 5px 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 0 0 7px;

    p {
      font-size: 6px;
      padding: 0 0 5px 0;
    }
  }
`;
