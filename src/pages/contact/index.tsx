import { Container } from './style';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInformation } from '../../components/session/sessionInformation';

export function Contact() {
  return (
    <Container aria-label="Contato">
      <SessionContact />
      <SessionInformation />
    </Container>
  );
}
