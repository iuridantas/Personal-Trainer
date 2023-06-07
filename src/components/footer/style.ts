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
  a {
    color: #ffff97;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    margin-right: 20px;
  }

  p {
    font-size: 1rem;
    padding: 4px 0 5px 0;
  }

  @media (max-width: 600px) {
    padding: 5px 0 0 7px;
    p {
      font-size: 0.4rem;
      padding: 0 0 5px 0;
    }
    a {
      margin-right: 5px;
    }
  }
`;
