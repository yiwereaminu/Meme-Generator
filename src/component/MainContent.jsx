import { Form, Row, Col, Button } from "react-bootstrap";

const MainContent = () => {
  return (
    <Form className="form-content">
      <Row className="mb-3">
        <Col>
          <Form.Label className="text-center">Top Text</Form.Label>
          <Form.Control type="text" placeholder="Enter top text" />
        </Col>
        <Col>
          <Form.Label className="text-center">Bottom Text</Form.Label>
          <Form.Control type="text" placeholder="Enter bottom text" />
        </Col>
      </Row>
      <Button variant="primary" type="submit" id="submit-button">
        Get a new meme image 🖼
      </Button>
    </Form>
  );
};

export default MainContent;
