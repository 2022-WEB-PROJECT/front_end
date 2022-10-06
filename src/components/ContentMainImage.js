import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import styled from "styled-components";
import Slider from "react-slick";
import "react-icons";

export default function ContentMainImage() {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      ></div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  //   const Container = styled.div`
  //     margin-left: 10%;
  //     margin-right: 10%;
  //     overflow: hidden;
  //   `;

  //   const StyledSlider = styled(Slider)`
  //     .slick-dots {
  //       bottom: -50px;
  //       margin-top: 200px;
  //     }
  //     .slick-slide div {
  //       outline: none;
  //     }
  //   `;

  //   const ImageContainer = styled.div`
  //     margin: 0 0px;
  //   `;

  //   const Image = styled.img`
  //     min-idth: 100%;
  //     min-height: 100%;
  //     max-width: 100%;
  //     max-height: 100%;
  //   `;

  const web1 = require("../image/img1.png");
  const web2 = require("../image/img2.jpg");
  const webitems = [
    { id: 0, url: web1 },
    { id: 1, url: web2 },
  ];

  return (
    <div>
      <h2>image</h2>

      <Slider {...settings}>
        {/* {webitems.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.url} />
            </div>
          );
        })} */}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}
