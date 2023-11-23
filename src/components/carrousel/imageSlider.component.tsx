import React, { useState, useEffect, TouchEvent } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config as springConfig } from 'react-spring';
import './styles.css'
interface Slide {
  key: string;
  content: JSX.Element;
  onClick: () => void;
}

const getTouches = (evt: TouchEvent) => {
  return evt.touches || (evt as any).originalEvent.touches; // browser API
};

const ImageSlider: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [enableSwipe] = useState(true);
  const [animationConfig] = useState(springConfig.gentle);
  const [touchPosition, setTouchPosition] = useState({ xDown: 0, yDown: 0 });

  const slides: Slide[] = [
    {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/801/?random" alt="1" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/802/?random" alt="2" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/600/803/?random" alt="3" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/500/?random" alt="4" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/804/?random" alt="5" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/800/?random" alt="6" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/600/?random" alt="7" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/805/800/?random" alt="8" />
      }
    // ... Define your slides here
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  const handleTouchStart = (evt: TouchEvent) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setTouchPosition({
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  const handleTouchMove = (evt: TouchEvent) => {
    if (!enableSwipe || touchPosition.xDown === null || touchPosition.yDown === null) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = touchPosition.xDown - xUp;
    const yDiff = touchPosition.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
        setGoToSlide((prevGoToSlide) => prevGoToSlide + 1);
      } else {
        // right swipe
        setGoToSlide((prevGoToSlide) => prevGoToSlide - 1);
      }
    }

    // Reset values
    setTouchPosition({
      xDown: 0,
      yDown: 0,
    });
  };

  useEffect(() => {
    // Reset touch position on unmount
    return () => {
      setTouchPosition({ xDown: 0, yDown: 0 });
    };
  }, []);

  return (
    <div 
      style={{ width: '100%', height: '500px', margin: '0 auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default ImageSlider;
