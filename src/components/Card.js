import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
