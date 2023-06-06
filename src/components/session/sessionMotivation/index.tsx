import { useEffect, useState } from 'react';
import { Container } from './style';

export function SessionMotivation() {
  const images = ['/img/home3.jpeg', '/img/home1.jpeg', '/img/home2.jpeg'];

  const texts = [
    'Atividade física regular fortalece os músculos e aumenta a energia.',
    'Praticar atividade física regularmente traz benefícios mentais e emocionais.',
    'Exercício físico melhora a saúde e o condicionamento do corpo.',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    setIntervalId(newIntervalId);
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Container>
      {images.map((src, index) => (
        <div
          key={index}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        >
          <img src={src} alt="Foto de treinos" />
          <h2>{texts[index]}</h2>
        </div>
      ))}
    </Container>
  );
}
