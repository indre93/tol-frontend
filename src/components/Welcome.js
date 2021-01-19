import React from 'react';
import style from '../style/Welcome.module.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import images from './images';

const Welcome = () => {
  return (
    <Container fluid className={style.container}>
      <Container >
        <h1>Welcome to TOL!</h1>
        <p>a place where you can connect with others, share your thoughts, and discuss various topics</p>
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
    </Container>
  );
};

export default Welcome;
