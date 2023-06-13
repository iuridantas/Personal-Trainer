import styled from 'styled-components';
import { ImWhatsapp } from 'react-icons/im';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  top: 670px;
  left: 30px;
  z-index: 9999;

  @media (max-width: 600px) {
    top: 580px;
    left: 8px;
  }
`;

export const WhatsApp = styled(ImWhatsapp)`
  font-size: 50px;
  border-radius: 30px;
  padding: 3px;
  color: white;
  background-color: green;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
