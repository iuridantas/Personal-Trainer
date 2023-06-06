import { useState } from 'react';
import { Container, IconContainer } from './style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function SessionTestimonials() {
  const texts = [
    'Não há segredo..dedique-se e esteja bem acompanhado! Eu estou, tenho certeza disso! Thiago é competente, dedicado aos seus alunos e extremamente profissional! Minha evolução é nítida e muito disso eu devo a ele. Serei sempre grata!',
    'Entrar em contato com o Thiago foi a melhor decisão que tomei. Ele me ajudou a atingir meus objetivos de forma eficiente e personalizada.',
    'O Thiago me ajudou a transformar meu corpo e minha saúde de forma incrível. Sou grato por sua dedicação e motivação constante.',
  ];

  const names = ['Jamily', 'Ana Nadja', 'Iuri'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Container>
      <h1>Depoimentos dos alunos</h1>
      <h2>" {texts[currentImageIndex]} "</h2>
      <h2>{names[currentImageIndex]}</h2>
      <IconContainer>
        <FiChevronLeft onClick={handlePrevImage} />
        <FiChevronRight onClick={handleNextImage} />
      </IconContainer>
    </Container>
  );
}
