import { useNavigate } from 'react-router-dom';
import { Container, ContainerContact } from './style';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

export function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (nav) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        (event.currentTarget as HTMLElement).setAttribute(
          'aria-expanded',
          active.toString(),
        );
        if (active) {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Fechar Menu',
          );
        } else {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Abrir Menu',
          );
        }
      }
    }

    btnMobile?.addEventListener('click', toggleMenu);

    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav) {
          nav.classList.remove('active');
        }
      });
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);

      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          if (nav) {
            nav.classList.remove('active');
          }
        });
      });
    };
  }, []);

  return (
    <Container aria-label="Menu de navegação principal">
      <img
        src="/img/logo.png"
        alt="logo"
        aria-label="Logotipo Thiago Batalha"
      />
      <nav id="nav">
        <button
          id="btn-mobile"
          aria-label="Abrir Menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <AiOutlineMenu />
        </button>
        <ul id="menu" role="menu">
          <li>
            <a
              onClick={() => {
                navigate('/');
              }}
              className="container-link"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/sobre-mim');
              }}
              className="container-link"
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/serviços');
              }}
              className="container-link"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/consultoria-online');
              }}
              className="container-link"
            >
              Consultoria Online
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/contato');
              }}
              className="container-link"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <ContainerContact aria-label="Número do WhatsApp de Thiago Batalha Personal Trainer">
        <a
          href="https://api.whatsapp.com/send?phone=5579998014413"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <BsWhatsapp
            size={24}
            className="whatsApp"
            alt="Ícone do WhatsApp de Thiago Batalha Personal Trainer"
            title="Número do WhatsApp de Thiago Batalha Personal Trainer"
          />
          <h2>79 9 9801-4413</h2>
        </a>
      </ContainerContact>
    </Container>
  );
}
