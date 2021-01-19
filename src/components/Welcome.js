import React from 'react';
import style from '../style/Welcome.module.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import images from './images';

const Welcome = () => {
  return (
    <Container fluid className={style.container}>
      <Carousel >
        {images.map((img, index) =>
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`${img.src}`}
              alt={img.title}
            />
            <Carousel.Caption>
              <h3>{img.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  );
};

export default Welcome;
