import { useEffect, useState } from 'react';
import { MotivationSession } from './style';

export function SessionMotivation() {
  const images = ['/img/home1.png', '/img/home2.png', '/img/home3.png'];

  const imagesPhone = [
    '/img/home1_cel.jpeg',
    '/img/home2_cel.png',
    '/img/home3_cel.jpeg',
  ];

  const texts = [
    'Atividade física regular fortalece os músculos e aumenta a energia.',
    'Praticar atividade física regularmente traz benefícios mentais e emocionais.',
    'Exercício físico melhora a saúde e o condicionamento do corpo.',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <section aria-label="Banner sobre venda de filhotes e sobre banho e tosa">
      <MotivationSession>
        <div className="carousel-container">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(${-currentImageIndex * 100}%)`,
              display: 'flex',
              transition: 'transform 1s ease-in-out',
            }}
          >
            {(window.innerWidth <= 1024 ? imagesPhone : images).map(
              (src, index) => (
                <div key={index} style={{ flex: `0 0 100%` }}>
                  <img
                    src={src}
                    alt={`Foto do banner ${index}`}
                    onLoad={handleImageLoad}
                    className={`${imagesLoaded ? '' : 'image-loading'}`}
                  />
                  <h1>{texts[index]}</h1>
                </div>
              ),
            )}
          </div>
        </div>
      </MotivationSession>
    </section>
  );
}
