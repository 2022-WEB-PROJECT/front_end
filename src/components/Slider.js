import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel
      variant="dark"
      controls={true} // 화살표
      className="w-100 m-auto"
    >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75" // w-100
          // src="https://via.placeholder.com/800x100"
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/Slogan_of_Seoul_I.SEOUL.U.jpg"
          alt="First slide"
          style={{ height: "340px", width: "auto", margin: "auto" }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75"
          // src="https://via.placeholder.com/800x100"
          src="https://thumbs.dreamstime.com/b/japan-city-tokyo-logo-simple-minimal-design-sans-serif-typo-rising-sun-minimalist-urban-style-print-apparel-t-160837637.jpg"
          alt="Second slide"
          style={{ height: "340px", width: "auto", margin: "auto" }}
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75"
          // src="https://via.placeholder.com/800x100"
          src="https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzMwL2NrZmlsZS9iNDI2NzBmYi1hY2JlLTQ1MjEtYjg1Yy1lZGQ5ZDFhMGQ2NDYucG5n&n=U21hcnRUYWlwZWlfTE9HTy5wbmc%3D&icon=.png"
          alt="Third slide"
          style={{ height: "340px", width: "auto", margin: "auto" }}
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
