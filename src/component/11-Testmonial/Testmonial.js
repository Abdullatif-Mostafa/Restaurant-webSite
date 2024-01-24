import React from 'react'
import { Carousel } from 'react-bootstrap'

const Testmonial = () => {
  return (
    <div className='Testmonial'>
      <div className='container'>
        <div className='row'>
          <h1 className='Testmonial-title text-center text-white'>Testmonial</h1>
            <div className='col'>
            <Carousel className='Testmonial-carousel'>
              <Carousel.Item >
                <img className=" " src="man2.jpg" alt="First slide"></img>
                <Carousel.Caption className='carousel-caption'>
                  <h3>First slide label</h3>
                  <p className='carousel-desc'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.Lorem consectetur adipiscing elit.Lorem 
                  </p>
                  <spnan>Arnold-Full Stack</spnan>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
              <img className=" " src="woman.jpg" alt="First slide"></img>
                <Carousel.Caption className='carousel-caption'>
                  <h3>Second slide label</h3>
                  <p className='carousel-desc'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.Lorem consectetur adipiscing elit.Lorem 
                  </p>
                  <spnan>Arnold-Full Stack</spnan>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className=" " src="man1.jpg" alt="First slide"></img>
                <Carousel.Caption className='carousel-caption'>
                <p className='carousel-desc'>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.Lorem consectetur adipiscing elit.Lorem 
                  </p>
                  <spnan>Arnold-Full Stack</spnan>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Testmonial