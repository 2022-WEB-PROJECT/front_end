import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function GridExample() {
  let style = {
    "text-decoration": "none",
    color: "black",
  };

  var arr = [
    "https://cdn-icons-png.flaticon.com/512/4091/4091968.png",
    "https://cdn-icons-png.flaticon.com/512/2083/2083256.png",
    "https://cdn-icons-png.flaticon.com/512/4091/4091976.png",
    "https://cdn-icons-png.flaticon.com/512/2399/2399888.png",
  ];

  return (
    <div>
      <select>
        <option value="popular">인기순</option>
        <option value="newest">최신순</option>
      </select>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Link
                href={"/detail/" + idx}
                className="text-decoration-line-none"
                style={style}
              >
                <Card.Img
                  variant="top"
                  // src="https://via.placeholder.com/300x160"
                  src={arr[idx]}
                />

                <Card.Body>
                  <Card.Title>회사{idx + 1}</Card.Title>
                  <Card.Text>소개</Card.Text>
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
