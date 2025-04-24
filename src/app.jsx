import React, { useState } from 'react';
import '../public/globals.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white">
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
  );
};
