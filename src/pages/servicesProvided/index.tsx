import { SessionPlans } from '../../components/session/sessionPlans';
import { SessionTraining } from '../../components/session/sessionTraining';
import { Container } from './style';

export default function Service() {
  return (
    <Container aria-label="Serviços de treinamento personalizado">
      <SessionTraining />
      <SessionPlans />
    </Container>
  );
}
