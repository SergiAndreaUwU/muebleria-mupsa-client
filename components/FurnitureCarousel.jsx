import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function FurnitureCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20150621181250"
          alt="First slide"
          width={"300px"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20150621181250"
          alt="First slide"
          width={"300px"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20150621181250"
          alt="First slide"
          width={"300px"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FurnitureCarousel;
