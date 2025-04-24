import React, { useState } from 'react';
import '../public/globals.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/custom-bootstrap.css';

// FontAwesome CDN for icons
const FA_LINK = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
if (!document.getElementById('fa-cdn')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = FA_LINK;
  link.id = 'fa-cdn';
  document.head.appendChild(link);
}

function TopNavBar() {
  return (
    <nav className="top-navbar">
      <div className="logo">
        Neighborhood<br />Explorer <span>A JVS Product</span>
      </div>
      <div className="nav-links">
        <a className="nav-link active" href="#"><i className="fa fa-home"></i>Home</a>
        <a className="nav-link" href="#"><i className="fa fa-chart-bar"></i>Outcome Stats</a>
        <a className="nav-link" href="#"><i className="fa fa-sitemap"></i>Organizations</a>
        <a className="nav-link" href="#"><i className="fa fa-flask"></i>Research</a>
        <a className="nav-link" href="#"><i className="fa fa-database"></i>Sources</a>
      </div>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search..." />
        <i className="fa fa-search search-icon"></i>
      </div>
      <button className="btn-request">Request</button>
      <button className="btn-signin">Sign In</button>
      <i className="fa fa-cog settings-icon"></i>
    </nav>
  );
}

export var App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <>
      <TopNavBar />
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white" style={{paddingTop: 60}}>

      <Row className="mb-4">
        <Col>
          <h2>Todo List</h2>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form onSubmit={handleAdd} className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add a todo..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="me-2"
            />
            <Button type="submit" variant="primary">Add</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {todos.map((todo, idx) => (
              <ListGroup.Item key={idx}>{todo}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </>
  );
};
