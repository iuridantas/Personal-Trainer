import { SessionModality } from '../../components/session/sessionModality';
import { SessionMotivation } from '../../components/session/sessionMotivation';
import { SessionObjective } from '../../components/session/sessionObjective';
import { SessionTestimonials } from '../../components/session/sessionTestimonials';
import { Container } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <SessionMotivation />
      <SessionObjective />
      <SessionModality />
      <SessionTestimonials />
    </Container>
  );
}
