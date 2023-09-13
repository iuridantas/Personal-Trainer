import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(48 48 48);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    max-width: 1440px;
  }

  img {
    width: 152px;
    height: 152px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .container-link {
    display: block;
    background: black;
    cursor: pointer;
    color: #ffff97;
    font-size: 24px;
    border-radius: 8px;
    width: auto;
    padding: 10px;
    border: none;
    box-shadow: 0px 2px 2px #ffff97;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  .container-link:hover {
    background-color: #000000;
    color: #ffff97;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -2px);
  }

  button {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 32px 16px;

    img {
      width: 152px;
      height: 152px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      background-color: rgb(48 48 48);
      width: 100%;
      top: 256px;
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 256px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      font-size: 23px;
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 32px;
      background: none;
      color: #ffff97;
      border: none;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) and (max-width: 820px) {
    div {
      padding: 32px 16px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      background-color: rgb(48 48 48);
      width: 100%;
      top: 216px;
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 216px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 40px;
      background: none;
      color: #ffff97;
      border: none;
      cursor: pointer;
    }
  }
`;
