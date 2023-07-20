import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./CarouselContainer.module.css";
import { useState } from "react";
import image1 from "../../assets/carousel/1.png";
import image2 from "../../assets/carousel/2.png";
import image3 from "../../assets/carousel/3.png";

            export default function CarouselContainer() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      imageSource: image1,
      imageAlt: "Variadadas",
      imageText: "Viandas para toda la familia",
    },

    {
      imageSource: image2,
      imageAlt: "Saludables",
      imageText: "Saludables",
    },
    {
      imageSource: image3,
      imageAlt: "Orgánicas",
      imageText: "100% orgánicas",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect} interval="10000">
        {slides.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className={styles.image}
                src={slide.imageSource}
                alt={slide.imageAlt}
              />
              {/* <Carousel.Caption>
                <div className={styles.textContainer}>{slide.imageText}</div>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

{
  /* <Carousel activeIndex={index} onSelect={handleSelect} interval="9000">
  <Carousel.Item>
    <img src="../../src/assets/carousel/variety.jpg" alt="Variadadas" />
    <Carousel.Caption>
      <div className={styles.CarouselText}>Viandas para toda la familia</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="../../src/assets/carousel/healthy.jpeg" alt="Saludables" />

    <Carousel.Caption>
      <div className={styles.CarouselText}>Saludables y nutritivas</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="../../src/assets/carousel/withLove.jpeg" alt="Caseras" />

    <Carousel.Caption>
      <div className={styles.CarouselText}>Caseras y con amor</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
 */
}

// {
//   imageSource: "../../src/assets/carousel/healthy.jpeg",
//   imageAlt: "Saludables",
//   imageText: "Saludables y nutritivas",
// },
// {
//   imageSource: "../../src/assets/carousel/withLove.jpeg",
//   imageAlt: "Caseras",
//   imageText: "Caseras y con amor",
// },
