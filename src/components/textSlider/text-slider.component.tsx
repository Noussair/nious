import React, { useState } from 'react';

const texts: string[] = [
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
    `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`,
    `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`,
  ];

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
    const rotationStyle = direction === 'right' ? { transform: 'rotate(270deg)' } : { transform: 'rotate(90deg)' };
  
    const gradientStyle = {
      background: 'linear-gradient(47deg, rgba(115,124,243,1) 0%, rgba(61,166,219,1) 35%, rgba(13,204,196,1) 100%)',
      ...rotationStyle
    };
  
    return (
      <div
        onClick={onClick}
        style={gradientStyle}
        className="animate-pulse w-12 h-12 mx-2 flex items-center justify-center cursor-pointer rounded-full shadow-lg"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="white"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m0 0l-7-7m7 7l7-7" // Revised path for a shorter tail
          ></path>
        </svg>
      </div>
    );
  };



const TextSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  const slideStyle = {
    transform: `translateX(-${index * 100}%)`,
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div id='about-nious' className="flex items-center justify-center w-full">
      <Arrow direction="left" onClick={prevSlide} />
      <div className="overflow-hidden w-full">
        <div className="flex" style={slideStyle}>
          {texts.map((text, idx) => (
            <div className="flex-none text-light w-full text-start px-4" key={idx}>
              <p className="text-white px-4  text-3xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <Arrow direction="right" onClick={nextSlide} />
    </div>
  );
};

export default TextSlider;
