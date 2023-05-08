import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
  display: flex;
  background-color: rgb(48 48 48);

  img {
    width: 150px;
    height: 150px;
  }

  button {
    background: none;
    color: #ffff97;
    font-size: 1rem;
    border-radius: 8px;
    width: auto;
    padding: 5px;
    margin-right: 20px;
    border: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  button:last-of-type {
    margin-right: 0;
  }

  button:hover {
    background-color: #000000;
    color: #ffff97;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -2px);
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

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffff97;
  }
`;
