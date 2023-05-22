import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  div {
    position: relative;
  }

  img {
    width: 1544px;
    height: 600px;
  }

  h2 {
    font-size: 2rem;
    position: absolute;
    bottom: 5px;
    background: rgba(0, 0, 0, 0.6);
    color: #ffff97;
    padding: 16px 28px 20px 28px;
    width: auto;
    text-align: center;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
      height: 200px;
    }

    h2 {
      font-size: 1rem;
      padding: 8px 14px 10px 14px;
    }
  }
`;
