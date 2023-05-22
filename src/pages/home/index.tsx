import { SessionMotivation } from '../../components/session/sessionMotivation';
import { SessionObjective } from '../../components/session/sessionObjective';

import { Container } from './style';

export function Home() {
  return (
    <Container>
      <SessionMotivation />
      <SessionObjective/>
    </Container>
  );
}
