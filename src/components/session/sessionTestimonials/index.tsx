import { useState, useEffect, useRef } from 'react';
import { Container, IconContainer, LeftIcon, RightIcon } from './style';

export function SessionTestimonials() {
  const testimonials = [
    'Não há segredo... dedique-se e esteja bem acompanhado! Eu estou, tenho certeza disso! Thiago é competente, dedicado aos seus alunos e extremamente profissional! Minha evolução é nítida e muito disso eu devo a ele. Serei sempre grata!',
    'Entrar em contato com o Thiago foi a melhor decisão que tomei. Ele me ajudou a atingir meus objetivos de forma eficiente e personalizada.',
    'O Thiago me ajudou a transformar meu corpo e minha saúde de forma incrível. Sou grato por sua dedicação e motivação constante.',
  ];

  const studentNames = ['Jamily', 'Ana Nadja', 'Iuri'];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | undefined>(undefined);

  useEffect(() => {
    const startInterval = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length,
        );
      }, 10000);
    };

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);

  const navigateToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length,
      );
    }, 10000);
  };

  const nextTestimonial = () => {
    const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
    navigateToTestimonial(nextIndex);
  };

  const previousTestimonial = () => {
    const previousIndex =
      currentTestimonialIndex - 1 < 0
        ? testimonials.length - 1
        : currentTestimonialIndex - 1;
    navigateToTestimonial(previousIndex);
  };

  return (
    <Container aria-label="Contêiner de depoimentos dos alunos">
      <h1>Depoimentos dos alunos</h1>
      <p>"{testimonials[currentTestimonialIndex]}"</p>
      <p>{studentNames[currentTestimonialIndex]}</p>
      <IconContainer>
        <LeftIcon
          onClick={previousTestimonial}
          aria-label="Depoimento anterior"
        />
        <RightIcon onClick={nextTestimonial} aria-label="Próximo depoimento" />
      </IconContainer>
    </Container>
  );
}
