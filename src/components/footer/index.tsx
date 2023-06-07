import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <Container>
      <div>
        <a
          href="https://www.instagram.com/thiagotreinador1_/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Perfil do Instagram de Thiago Batalha Personal Trainer"
          title="Perfil do Instagram de Thiago Batalha Personal Trainer"
        >
          <FaInstagram
            className="instagram"
            alt="Ícone do Instagram de Thiago Batalha Personal Trainer"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Número do WhatsApp de Thiago Batalha Personal Trainer"
          title="Número do WhatsApp de Thiago Batalha Personal Trainer"
        >
          <FaWhatsapp
            className="whatsApp"
            alt="Ícone do WhatsApp de Thiago Batalha Personal Trainer"
          />
        </a>
      </div>
      <div>
        <p>
          © 2023 Thiago Batalha Personal Trainer - Todos os direitos reservados.
        </p>
      </div>
    </Container>
  );
}
