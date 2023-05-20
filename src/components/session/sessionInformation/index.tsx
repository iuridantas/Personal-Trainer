import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionInformation() {
  return (
    <Container>
      <a
        href="https://www.instagram.com/thiagotreinador1_/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h3>
          <FaInstagram
            className="instagram"
            alt="Ícone do Instagram de Thiago Batalha Personal Trainer"
          />
          <span />
          Instagram
        </h3>
        <h3>@thiagotreinador1_</h3>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5579998014413"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>
          <FaWhatsapp
            className="whatsApp"
            alt="Ícone do WhatsApp de Thiago Batalha Personal Trainer"
          />
          <span />
          WhatsApp
        </h3>
        <h3>79 9 9801-4413</h3>
      </a>
      <a
        href="mailto:thiagomarquesbat@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>
          <AiOutlineMail
            className="email"
            alt="Ícone do Email de Thiago Batalha Personal Trainer"
          />
          <span />
          Email
        </h3>
        <h3>thiagomarquesbat@gmail.com</h3>
      </a>
    </Container>
  );
}
