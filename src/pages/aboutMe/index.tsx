import { SessionCurriculum } from '../../components/session/sessionCurriculum';
import { SessionMissonAndValue } from '../../components/session/sessionMissonAndValue';
import { SessionWhoIAm } from '../../components/session/sessionWhoIAm';
import { Container } from './style';

export function AboutMe() {
  return (
    <Container>
      <SessionWhoIAm />
      <SessionCurriculum />
      <SessionMissonAndValue />
    </Container>
  );
}
