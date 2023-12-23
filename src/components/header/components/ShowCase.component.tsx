import Slider from "../../slider/slider.component";

const ShowCase = () => {
  const slides = [
    { url: "src/assets/img1.jpg", alt: "Image 1" },
    { url: "src/assets/img2.jpg", alt: "Image 2" },
    { url: "src/assets/img3.jpg", alt: "Image 3" },
    { url: "src/assets/img4.jpg", alt: "Image 4" },
    { url: "src/assets/img5.jpg", alt: "Image 5" },
    { url: "src/assets/img6.jpg", alt: "Image 6" },
  ];
  return (
    <div style={{ zIndex: 100 }} className="absolute top-20 left-0 right-0">
      <Slider slides={slides} />
    </div>
  );
};

export default ShowCase;
