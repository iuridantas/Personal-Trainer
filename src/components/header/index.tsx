import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (!nav) return;
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-expanded',
        active.toString(),
      );
      (event.currentTarget as HTMLElement).setAttribute(
        'aria-label',
        active ? 'Fechar Menu' : 'Abrir Menu',
      );
    }

    btnMobile?.addEventListener('click', toggleMenu);

    function scrollToTarget(target: string) {
      const targetElement = document.getElementById(target);
      if (!targetElement) return;
      const headerHeight =
        (document.querySelector('header') as HTMLElement)?.offsetHeight || 0;
      const targetOffset = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      if (nav) nav.classList.remove('active');
    }

    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = (event.target as HTMLElement).getAttribute('href');
        if (target) scrollToTarget(target);
      });
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);

      navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = (event.target as HTMLElement).getAttribute('href');
          if (target) scrollToTarget(target);
        });
      });
    };
  }, []);

  return (
    <header aria-label="Menu de navegação principal">
      <Container>
        <div>
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
        </div>
      </Container>
    </header>
  );
}
