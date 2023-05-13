import { Container, ContainerContact } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function Contact() {
  return (
    <Container>
      <h1>ENTRE EM CONTATO E COMECE A TREINAR AGORA</h1>
      <h2>
        Caso você ainda não saiba como posso ajudá-lo ou tenha alguma outra
        dúvida, por favor, não hesite em entrar em contato comigo. Você pode
        utilizar os botões de Whatsapp, Instagram ou Email disponíveis na tela.
        Estou à disposição para auxiliá-lo no que for necessário.
      </h2>
      <ContainerContact>
        <a href="https://www.instagram.com/thiagotreinador1_/" target="_blank">
          <FaInstagram className="instagram" />
          <h3>@thiagotreinador1_</h3>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
        >
          <FaWhatsapp className="whatsApp" />
          <h3>79 9 9801-4413</h3>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
        >
          <AiOutlineMail className="email" />
          <h3>thiagobatalha@hotmail.com</h3>
        </a>
      </ContainerContact>
    </Container>
  );
}
