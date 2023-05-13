import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
}
html, body, #root {
width: 100%;
align-items: center;
}
body {
background-color: #FFFF97;
color: #000000;
}   
`;

export const Content = styled.div`
  align-items: center;
  justify-content: center;
`;
