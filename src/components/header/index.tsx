import { useNavigate } from 'react-router-dom';
import { Container, ContainerContact } from './style';
import { BsWhatsapp } from 'react-icons/bs';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src="/img/logo.png" alt="logo" />
      <div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate('/services');
          }}
        >
          Serviços
        </button>
        <button
          onClick={() => {
            navigate('/onlinConsulting');
          }}
        >
          Consultoria Online
        </button>
        <button
          onClick={() => {
            navigate('/plans');
          }}
        >
          Planos
        </button>
        <button
          onClick={() => {
            navigate('/testimonials');
          }}
        >
          Depoimentos
        </button>
        <button
          onClick={() => {
            navigate('/contact');
          }}
        >
          Contato
        </button>
      </div>
      <ContainerContact>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp size={24} />
        </a>
        <h2>79 9 9801-4413</h2>
      </ContainerContact>
    </Container>
  );
}
