import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import LandingImage1 from "/public/landingPage/landing1.png";
import { Container } from "react-bootstrap";

function FurnitureCarousel() {
  return (
    <div style={{ display: "flex", width: "100vw",backgroundColor:"black",maxWidth:"100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", width: "50vw" }}>
        <Carousel controls={false} indicators={false} keyboard={false}>
          <Carousel.Item>
            <div style={{ width: "100%", position: "relative" }}>
              <Image
                className="d-block w-100"
                src={LandingImage1}
                alt="Mupsa"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default FurnitureCarousel;
