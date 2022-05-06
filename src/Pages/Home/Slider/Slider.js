import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../Images/slider/slider1.jpg'
import slider2 from '../../../Images/slider/slider2.jpg'
import slider3 from '../../../Images/slider/slider3.jpg'

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:"650px"}}
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:"650px"}}
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height:"650px"}}
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;