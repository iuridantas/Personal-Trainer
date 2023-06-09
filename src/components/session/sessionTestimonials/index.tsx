import { useState } from 'react';
import { Container, IconContainer, LeftIcon, RightIcon } from './style';

export function SessionTestimonials() {
  const testimonials = [
    'Não há segredo... dedique-se e esteja bem acompanhado! Eu estou, tenho certeza disso! Thiago é competente, dedicado aos seus alunos e extremamente profissional! Minha evolução é nítida e muito disso eu devo a ele. Serei sempre grata!',
    'Entrar em contato com o Thiago foi a melhor decisão que tomei. Ele me ajudou a atingir meus objetivos de forma eficiente e personalizada.',
    'O Thiago me ajudou a transformar meu corpo e minha saúde de forma incrível. Sou grato por sua dedicação e motivação constante.',
  ];

  const studentNames = ['Jamily', 'Ana Nadja', 'Iuri'];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length,
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
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
