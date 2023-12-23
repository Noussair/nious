import Slider from "react-slick";

const CircleShape = () => {
  return (
    <div
      style={{
        width: "15rem",
        borderRadius: "100px",
        backgroundColor: "#cccccc",
      }}
      className="bg-grey shadow-md rounded-full w-64 h-64"
    ></div>
  );
};

const slides = [
  <CircleShape></CircleShape>,
  <CircleShape></CircleShape>,
  <CircleShape></CircleShape>,
  <CircleShape></CircleShape>,
  <CircleShape></CircleShape>,
  <CircleShape></CircleShape>,
];

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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Display only one slide at a time in mobile
          slidesToScroll: 1,
          initialSlide: 0,
        centerMode: true,
        centerPadding: '10%',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1, // Display only one slide at a time in mobile
          slidesToScroll: 1,
          initialSlide: 0,
        centerMode: true,
        centerPadding: '9%',
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1, // Display only one slide at a time in mobile
          slidesToScroll: 1,
          initialSlide: 0,
        centerMode: true,
        centerPadding: '5%',
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1, // Display only one slide at a time in mobile
          slidesToScroll: 1,
          initialSlide: 0,
        centerMode: true,
        centerPadding: '5%',
        },
      },
    ],
  };

  return (
    <div className="container mx-auto text-center">
      <h1
        style={{ marginBottom: "5rem" }}
        className="text-2xl text-darker font-bold text-gray-900 mb-4 text-center"
      >
        TESTIMONIALS / LATEST POSTS / PARTNERS / CLIENTS / EVENTS
      </h1>
      <Slider className="custom-slider" {...settings}>
        {slides.map((_slide, index) => {
          return (
            <div key={index}>
              <CircleShape></CircleShape>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PartnerSection;
