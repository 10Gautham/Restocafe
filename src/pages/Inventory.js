import React, { useState } from 'react';
import { Container, Card, CardGroup, Button, Form } from 'react-bootstrap';

const Inventory = ({ items, addItem }) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length + 1, // Assign a new ID
      name: itemName,
      description,
      price,
      image,
    };
    addItem(newItem); // Add the new item to the inventory
    setItemName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <Container>
      <h2>Inventory</h2>

      <Form onSubmit={handleSubmit} className="mb-5">
        <Form.Group controlId="itemName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>

      <CardGroup>
        {items.map((item) => (
          <Card key={item.id} className="m-3">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text><strong>Price:</strong> {item.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default Inventory;
