import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function CatalogueCarousel({ imagesArray }) {
  return (
    <div>
      <Carousel variant="dark" indicators={false}>
        {imagesArray.map((imag, index) => (
          <Carousel.Item key={imag}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "auto" }}>
                <Image
                  src={imag}
                  alt={`${index} slide`}
                  objectFit="contain"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CatalogueCarousel;
