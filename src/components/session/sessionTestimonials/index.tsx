import { useState, useEffect, useRef } from 'react';
import {
  TestimonialsSession,
  Female,
  IconContainer,
  LeftIcon,
  Male,
  RightIcon,
  StarIcon,
  StarsContainer,
  TestimonialCard,
  TestimonialText,
} from './style';

const testimonials = [
  'Não há segredo... dedique-se e esteja bem acompanhado! Eu estou, tenho certeza disso! Thiago é competente, dedicado aos seus alunos e extremamente profissional! Minha evolução é nítida e muito disso eu devo a ele. Serei sempre grata!',
  'Entrar em contato com o Thiago foi a melhor decisão que tomei. Ele me ajudou a atingir meus objetivos de forma eficiente e personalizada.',
  'O Thiago me ajudou a transformar meu corpo e minha saúde de forma incrível. Sou grato por sua dedicação e motivação constante.',
  'Malhar com Thiago foi fundamental pra eu gostar de academia. Ele sempre cria treinos diversos, me ajuda a corrigir os exercícios e me motiva a superar os limites.',
  'Treinar com Thiago me faz amar a musculação e foi essencial para melhorar minha qualidade de vida e autoestima',
  'Treino com Thiago há mais de 6 anos e posso garantir que a experiência vai além dos treinos, o dia a dia se torna mais engraçado, leve e o condicionamento físico em constante melhora. Ótima pessoa e profissional!',
  'Treino com Thiago a mais ou menos 8 meses e vou ser sincero odiava academia mais hoje minha vida mudou totalmente e tudo graças aos ensinamentos e orientações dele hoje me sinto uma pessoa melhor e com uma saúde melhor por isso só tenho a agradecer por todos os cuidados.',
  'O aplicativo não deixa ter dúvidas. Tudo bem claro, prático e altamente intuitivo. Daqui a pouco faço 2 meses certinhos, sem falhar. O corpo já começa a dar sinais que está atendendo o comando, sob uma orientação bem feita. Com um profissional que confio de olhos fechados. Sei que o resultado virá. Sem pressa. Apenas curtindo o processo sem me preocupar com a linha de chegada.',
];

const studentNames = [
  { name: 'Jamily', gender: 'female' },
  { name: 'Ana Nadja', gender: 'female' },
  { name: 'Iuri Dantas', gender: 'male' },
  { name: 'Aloísio Abreu', gender: 'male' },
  { name: 'Belquior', gender: 'male' },
  { name: 'Yuri Alvez', gender: 'male' },
  { name: 'Humberto Nelore', gender: 'male' },
  { name: 'Lili', gender: 'female' },
];

export function SessionTestimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const intervalRef = useRef<any>(null);
  const [filledStars, setFilledStars] = useState(5);

  useEffect(() => {
    const startInterval = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length,
        );
      }, 5000);
    };

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const navigateToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
    setFilledStars(5);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length,
      );
    }, 5000);
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

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const currentStudent = studentNames[currentTestimonialIndex];

  return (
    <section aria-label="Contêiner de depoimentos dos alunos">
      <TestimonialsSession>
        <h2>Depoimentos dos alunos</h2>
        <TestimonialCard>
          <div>
            {currentStudent.gender === 'male' ? (
              <Male alt="Ícone masculino" />
            ) : (
              <Female alt="Ícone feminino" />
            )}
          </div>
          <StarsContainer>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} filled={index < filledStars} />
            ))}
          </StarsContainer>
          <TestimonialText>"{currentTestimonial}"</TestimonialText>
          <p>{currentStudent.name}</p>
        </TestimonialCard>
        <IconContainer>
          <LeftIcon onClick={previousTestimonial} aria-label="Depoimento anterior" />
          <RightIcon onClick={nextTestimonial} aria-label="Próximo depoimento" />
        </IconContainer>
      </TestimonialsSession>
    </section>
  );
}
