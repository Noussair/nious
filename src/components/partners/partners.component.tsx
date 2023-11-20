import React from "react";
import Slider from "react-slick";

const CircleShape = () => {
    return (
        <div style={{ width: '15rem', borderRadius:'100px',backgroundColor:'#cccccc' }} className="bg-grey shadow-md rounded-full w-64 h-64"></div>
    );
};







const slides  = [
    <CircleShape></CircleShape>,
    <CircleShape></CircleShape>,
    <CircleShape></CircleShape>,
    <CircleShape></CircleShape>,
    <CircleShape></CircleShape>,
    <CircleShape></CircleShape>
]

const PartnerSection = () => {
    const settings = {
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        slidesToShow: 4,
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

    return (<div className="container m-auto">
     <h1 style={{marginBottom:'5rem'}} className="text-4xl text-darker  font-bold text-gray-900 mb-4 text-center">TESTIMONIALS / LATEST POSTS /
PARTNERS / CLIENTS / EVENTS</h1>
         <Slider {...settings}>
                    {slides.map((slide,index)=>{
                        return (<div key={index}>
                            <CircleShape ></CircleShape>
                        </div>)
                    })}
            </Slider>
    </div>
       
    );

}

export default PartnerSection