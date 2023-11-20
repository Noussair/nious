import React from "react";
import Slider from "react-slick";

const CircleShape = () => {
    return (
        <div style={{ width: '15rem', borderRadius:'100px',backgroundColor:'#cccccc' }} className="bg-grey shadow-md rounded-full w-64 h-64"></div>
    );
};

const PartnerSection = () => {
    const settings = {
        autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="p-4">
            <h2>Custom Arrows</h2>
            <Slider {...settings}>
                <div>
                    <CircleShape></CircleShape>
                </div>
                <div>
                    <CircleShape></CircleShape>
                </div>
                <div>
                    <CircleShape></CircleShape>
                </div>
                <div>
                    <CircleShape></CircleShape>
                </div>
                <div>
                    <CircleShape></CircleShape>
                </div>
                <div>
                    <CircleShape></CircleShape>
                </div>
            </Slider>
        </div>
    );

}

export default PartnerSection