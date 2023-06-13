import { SessionModality } from '../../components/session/sessionModality';
import { SessionMotivation } from '../../components/session/sessionMotivation';
import { SessionObjective } from '../../components/session/sessionObjective';
import { SessionTestimonials } from '../../components/session/sessionTestimonials';
import { Container, WhatsAppButton, WhatsApp } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <WhatsAppButton
        href="https://api.whatsapp.com/send?phone=5579998014413&text=Ol%C3%A1%20Thiago%20Batalha,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Número do WhatsApp de Thiago Batalha Personal Trainer"
        title="Número do WhatsApp de Thiago Batalha Personal Trainer"
      >
        <WhatsApp
          className="whatsApp"
          alt="Ícone representando o WhatsApp de Thiago Batalha Personal Trainer"
        />
      </WhatsAppButton>
      <SessionMotivation />
      <SessionObjective />
      <SessionModality />
      <SessionTestimonials />
    </Container>
  );
}
