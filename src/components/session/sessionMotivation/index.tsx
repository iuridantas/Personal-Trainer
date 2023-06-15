import { useEffect, useState } from 'react';
import { MotivationSession } from './style';

export function SessionMotivation() {
  const images = ['/img/home3.jpeg', '/img/home1.jpeg', '/img/home2.png'];

  const texts = [
    'Atividade física regular fortalece os músculos e aumenta a energia.',
    'Praticar atividade física regularmente traz benefícios mentais e emocionais.',
    'Exercício físico melhora a saúde e o condicionamento do corpo.',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadImages();
  }, []);

  return (
    <section aria-label="Galeria de motivação para sessões de exercícios físicos">
      <MotivationSession>
        {images.map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img src={src} alt="Foto de treinos" />
            <h1>{texts[index]}</h1>
          </div>
        ))}
      </MotivationSession>
    </section>
  );
}
