import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./CarouselContainer.module.css";
import { useState } from "react";


export default function CarouselContainer() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      imageSource: "../../src/assets/carouselImages/firstImage.png",
      imageAlt: "Variadadas",
      imageText: "Viandas para toda la familia",
    },

    {
      imageSource: "../../src/assets/carouselImages/secondImage.png",
      imageAlt: "Saludables",
      imageText: "Saludables",
    },
    {
      imageSource: "../../src/assets/carouselImages/thirdImage.png",
      imageAlt: "Orgánicas",
      imageText: "100% orgánicas",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect} interval="9000">
        {slides.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className={styles.image}
                src={slide.imageSource}
                alt={slide.imageAlt}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
