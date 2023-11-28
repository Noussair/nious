
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

interface Slide {
  url: string;
  alt?: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={true}
        effect={'coverflow'}
        grabCursor={true}
        pagination={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.url} alt={slide.alt || 'Slide image'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
