import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Home.css';  // Import the CSS file

const Home = () => (
  <Container>
    <h1>Welcome to RestoCafe Inventory System</h1>
    <p>Your one-stop solution for managing all your cafe inventory needs. Track, update, and manage your stock in real-time.</p>
    <Carousel>
      <Carousel.Item>
        <img className="d-block carousel-image" src="/images/coffee1.jpg" alt="Coffee Beans" />
        <Carousel.Caption>
          <h3>Premium Coffee Beans</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-image" src="/images/milk1.jpg" alt="Milk" />
        <Carousel.Caption>
          <h3>Fresh Organic Milk</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-image" src="/images/biscuit1.jpeg" alt="Biscuits" />
        <Carousel.Caption>
          <h3>Assorted Biscuits</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Home;
