import { InformationSession } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionInformation() {
  return (
    <section aria-label="Informações de contato de Thiago Batalha Personal Trainer">
      <InformationSession>
        <a
          href="https://www.instagram.com/thiagotreinador1_/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Perfil do Instagram de Thiago Batalha Personal Trainer"
          title="Perfil do Instagram de Thiago Batalha Personal Trainer"
        >
          <h3>
            <FaInstagram
              className="instagram"
              alt="Ícone representando o perfil do Instagram de Thiago Batalha Personal Trainer"
            />
            <span>Instagram</span>
          </h3>
          <p>@thiagotreinador1_</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413&text=Ol%C3%A1%20Thiago%20Batalha,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Número do WhatsApp de Thiago Batalha Personal Trainer"
          title="Número do WhatsApp de Thiago Batalha Personal Trainer"
        >
          <h3>
            <FaWhatsapp
              className="whatsApp"
              alt="Ícone representando o WhatsApp de Thiago Batalha Personal Trainer"
            />
            <span />
            WhatsApp
          </h3>
          <p>79 9 9801-4413</p>
        </a>
        <a
          href="mailto:thiagomarquesbat@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email de Thiago Batalha Personal Trainer"
          title="Email de Thiago Batalha Personal Trainer"
        >
          <h3>
            <AiOutlineMail
              className="email"
              alt="Ícone representando o Email de Thiago Batalha Personal Trainer"
            />
            <span />
            Email
          </h3>
          <p>thiagomarquesbat@gmail.com</p>
        </a>
      </InformationSession>
    </section>
  );
}
