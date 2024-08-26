import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import About from './pages/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null
    };
  }

  componentDidMount() {
    // Load initial data
    const items = [
      { id: 1, name: 'Coffee Beans', description: 'Premium Arabica beans', image: '/images/coffee1.jpg', price: '$20' },
      { id: 2, name: 'Milk', description: 'Organic whole milk', image: '/images/milk1.jpg', price: '$10' },
      { id: 3, name: 'Sugar', description: 'Granulated white sugar', image: '/images/sugar.jpeg', price: '$5' },
      { id: 4, name: 'Tea Leaves', description: 'Fresh green tea leaves', image: '/images/tea.jpg', price: '$15' },
      { id: 5, name: 'Biscuits', description: 'Assorted biscuits', image: '/images/biscuit1.jpeg', price: '$8' },
      { id: 6, name: 'Bread', description: 'Whole grain bread', image: '/images/bread.jpg', price: '$12' },
      { id: 7, name: 'Butter', description: 'Unsalted butter', image: '/images/butter.jpg', price: '$7' },
      { id: 8, name: 'Cheese', description: 'Cheddar cheese', image: '/images/cheese.jpeg', price: '$18' },
      { id: 9, name: 'Eggs', description: 'Free-range eggs', image: '/images/egg.jpeg', price: '$6' },
      { id: 10, name: 'Juice', description: 'Freshly squeezed orange juice', image: '/images/juice.jpg', price: '$14' },
    ];
    this.setState({ items });
  }

  addItem = (newItem) => {
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  };

  render() {
    return (
      <Router>
        <Container fluid>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">RestoCafe</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory items={this.state.items} addItem={this.addItem} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    );
  }
}

export default App;
