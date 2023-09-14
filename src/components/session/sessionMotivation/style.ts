import styled from 'styled-components';

export const MotivationSession = styled.div`
  .carousel-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 2s ease-in-out;
  }

  .image-loading {
    filter: blur(10px);
    transition: filter 0.3s;
  }

  img {
    width: 100%;
  }

  div {
    position: relative;
  }

  img {
    width: 100%;
    height: 600px;
  }

  h1 {
    font-size: 32px;
    position: absolute;
    bottom: 5px;
    left: 363px;
    background: rgba(0, 0, 0, 0.6);
    color: #ffff97;
    padding: 16px 28px 20px 28px;
    width: auto;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
      height: 260px;
    }

    h1 {
      font-size: 16px;
      padding: 8px 14px 10px 14px;
      bottom: 5px;
      left: auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 100%;
    }

    h1 {
      left: auto;
    }
  }
`;
