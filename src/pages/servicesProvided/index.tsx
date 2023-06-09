import { SessionPlans } from '../../components/session/sessionPlans';
import { SessionTraining } from '../../components/session/sessionTraining';
import { Container } from './style';

export default function Service() {
  return (
    <Container aria-label="Serviços de treinamento personalizado">
      <h1>Serviços de treinamento personalizado - Conheça nossas opções</h1>
      <SessionTraining />
      <SessionPlans />
    </Container>
  );
}
