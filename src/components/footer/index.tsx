import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer>
      <Container aria-label="Links de mídia social e direitos autorais">
        <section>
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
              href="https://api.whatsapp.com/send?phone=5579998014413&text=Ol%C3%A1%20Thiago%20Batalha,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
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
        </section>
        <section>
          <div>
            <p>
              © 2023 Thiago Batalha Personal Trainer - Todos os direitos
              reservados.
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
}
