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
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}