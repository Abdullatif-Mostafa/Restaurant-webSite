import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function TestmonialData() {
  return (
    <Carousel className='Testmonial'>
      <Carousel.Item className='Carousel'>
      <img className=" " src="man2.jpg" alt="First slide"></img>
      <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
      <img className=" " src="woman.jpg" alt="First slide"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
      <img className=" " src="man1.jpg" alt="First slide"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TestmonialData;