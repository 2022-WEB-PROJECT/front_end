import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function GridExample() {
  let style = {
    "text-decoration": "none",
    color: "black",
  };
  return (
    <div>
      <select>
        <option value="popular">인기순</option>
        <option value="newest">최신순</option>
      </select>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Link
                href={"/detail/" + idx}
                className="text-decoration-line-none"
                style={style}
              >
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x160"
                />

                <Card.Body>
                  <Card.Title>{idx}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
