import { Container, ContainerContact } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function Contact() {
  return (
    <Container>
      <h1>Entre em contato com Thiago Batalha - Personal Trainer</h1>
      <h2>
        Caso você ainda não saiba como posso ajudá-lo ou tenha alguma outra
        dúvida, por favor, não hesite em entrar em contato comigo. Você pode
        utilizar os botões de Whatsapp, Instagram ou Email disponíveis na tela.
        Estou à disposição para auxiliá-lo no que for necessário.
      </h2>
      <ContainerContact>
        <a
          href="https://www.instagram.com/thiagotreinador1_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3>
            <FaInstagram
              className="instagram"
              alt="Ícone do Instagram de Thiago Batalha Personal Trainer"
            />
            <span />
            Instagram
          </h3>
          <h3>@thiagotreinador1_</h3>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            <FaWhatsapp
              className="whatsApp"
              alt="Ícone do WhatsApp de Thiago Batalha Personal Trainer"
            />
            <span />
            WhatsApp
          </h3>
          <h3>79 9 9801-4413</h3>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            <AiOutlineMail
              className="email"
              alt="Ícone do Email de Thiago Batalha Personal Trainer"
            />
            <span />
            Email
          </h3>
          <h3>thiagobatalha@hotmail.com</h3>
        </a>
      </ContainerContact>
    </Container>
  );
}
