import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  width: 100%;
  background-color: rgb(48 48 48);

  img {
    width: 152px;
    height: 152px;
  }

  ul {
    padding: 0px;
    display: flex;
    list-style: none;
    gap: 1rem;
  }

  .container-link {
    display: block;
    background: none;
    cursor: pointer;
    color: #ffff97;
    font-size: 1.5rem;
    border-radius: 8px;
    width: auto;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  .container-link:last-of-type {
    margin-right: 0;
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
    padding: 2rem 1rem;

    img {
      width: 152px;
      height: 152px;
    }

    ul {
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
      height: calc(100vh - 183px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      font-size: 1.4rem;
      padding: 1rem 0;
      margin: 0 1rem;
    }

    button {
      display: flex;
      font-size: 2rem;
      background: none;
      color: #ffff97;
      border: none;
      cursor: pointer;
    }
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  color: #ffff97;

  h2 {
    display: flex;
    font-size: larger;
    color: #ffff97;
    margin-left: 10px;
  }

  a.contact-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffff97;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
