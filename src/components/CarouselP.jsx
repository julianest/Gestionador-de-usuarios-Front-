import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../Img/img1.jpg"
import img2 from "../Img/img2.jpg"
import img3 from "../Img/img3.jpg"
import img4 from "../Img/img4.jpg"
import '../containers/home/home.css';

const CarouselP = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      controls={false}
      >
        <Carousel.Item>
          <img className="d-block w-80 imgHome" src={img3} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 imgHome" src={img2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 imgHome" src={img4} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 imgHome" src={img1} alt="Third slide" />
        </Carousel.Item>

      </Carousel>
    </>

  )
}

export default CarouselP;