import { SessionFunctionOnline } from '../../components/session/sessionFunctionOnline';
import { SessionPersonalOnline } from '../../components/session/sessionPersonalOnline';
import { Container } from './style';

export function OnlineConsulting() {
  return (
    <Container>
      <SessionPersonalOnline />
      <SessionFunctionOnline />
    </Container>
  );
}
