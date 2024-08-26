import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const About = () => (
  <Container>
    <h2>About RestoCafe</h2>
    <p>RestoCafe is dedicated to providing the finest inventory management solutions for cafes. Our system is designed to help you efficiently track and manage your stock, ensuring that your cafe runs smoothly and your customers are always satisfied.</p>
    <ListGroup>
      <ListGroup.Item>Easy management of inventory items</ListGroup.Item>
      <ListGroup.Item>Real-time updates</ListGroup.Item>
      <ListGroup.Item>Customizable item details</ListGroup.Item>
      <ListGroup.Item>Seamless integration with your cafe's operations</ListGroup.Item>
    </ListGroup>
    <p>Contact us:</p>
    <p>Email: 10gautham2004@gmail.com</p>
    <p>Phone: 9988776655</p>
    <p>Follow us on Instagram: <a href="https://www.instagram.com/restocafe">restocafe</a></p>
  </Container>
);

export default About;
