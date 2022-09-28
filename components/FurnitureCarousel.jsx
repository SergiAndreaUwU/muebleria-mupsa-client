import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function FurnitureCarousel({imagesArray}) {
  return (
    <Carousel variant="dark" indicators={false}>
    {imagesArray.map((imag, index) => (
      <Carousel.Item key={imag}>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "auto",width: '100%', height: '85vh', position: 'relative' }}>
            <Image
              src={imag}
              alt={`${index} slide`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

export default FurnitureCarousel;
