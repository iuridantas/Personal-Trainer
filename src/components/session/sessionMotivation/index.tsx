import { useEffect, useState } from 'react';
import { MotivationSession } from './style';

const desktopImages = ['/img/home1.png', '/img/home2.png', '/img/home3.png'];
const mobileImages = [
  '/img/home1_cel.jpeg',
  '/img/home2_cel.png',
  '/img/home3_cel.jpeg',
];

const texts = [
  'Atividade física regular fortalece os músculos e aumenta a energia.',
  'Praticar atividade física regularmente traz benefícios mentais e emocionais.',
  'Exercício físico melhora a saúde e o condicionamento do corpo.',
];

export function SessionMotivation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % desktopImages.length,
      );
    }, 6000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const imagesToDisplay = windowWidth <= 1024 ? mobileImages : desktopImages;

  return (
    <section aria-label="Banner sobre motivação">
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
            {imagesToDisplay.map((src, index) => (
              <div key={index} style={{ flex: '0 0 100%' }}>
                <img
                  src={src}
                  alt={`Foto do banner ${index}`}
                  onLoad={handleImageLoad}
                  className={`${imagesLoaded ? '' : 'image-loading'}`}
                />
                <h1>{texts[index]}</h1>
              </div>
            ))}
          </div>
        </div>
      </MotivationSession>
    </section>
  );
}
