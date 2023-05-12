import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <Container>
      <div>
        <a href="https://www.instagram.com/thiagotreinador1_/" target="_blank">
          <FaInstagram className="instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
        >
          <FaWhatsapp className="whatsApp" />
        </a>
      </div>
      <div>
       <p>© 2023 Thiago Batalha Personal Trainer - Todos os direitos reservados.
        Desenvolvido por{' '}
        <a href="https://github.com/iuridantas" target="_blank">
          Iuri Dantas
        </a>
        </p>
      </div>
    </Container>
  );
}
