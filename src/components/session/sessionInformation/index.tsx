import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionInformation() {
  return (
    <Container aria-label="Informações de contato de Thiago Batalha Personal Trainer">
      <a
        href="https://www.instagram.com/thiagotreinador1_/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Perfil do Instagram de Thiago Batalha Personal Trainer"
        title="Perfil do Instagram de Thiago Batalha Personal Trainer"
      >
        <p>
          <FaInstagram
            className="instagram"
            alt="Ícone do Instagram de Thiago Batalha Personal Trainer"
          />
          <span />
          Instagram
        </p>
        <p>@thiagotreinador1_</p>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5579998014413"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Número do WhatsApp de Thiago Batalha Personal Trainer"
        title="Número do WhatsApp de Thiago Batalha Personal Trainer"
      >
        <p>
          <FaWhatsapp
            className="whatsApp"
            alt="Ícone do WhatsApp de Thiago Batalha Personal Trainer"
          />
          <span />
          WhatsApp
        </p>
        <p>79 9 9801-4413</p>
      </a>
      <a
        href="mailto:thiagomarquesbat@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email de Thiago Batalha Personal Trainer"
        title="Email de Thiago Batalha Personal Trainer"
      >
        <p>
          <AiOutlineMail
            className="email"
            alt="Ícone do Email de Thiago Batalha Personal Trainer"
          />
          <span />
          Email
        </p>
        <p>thiagomarquesbat@gmail.com</p>
      </a>
    </Container>
  );
}
