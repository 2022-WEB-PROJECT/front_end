import { useEffect, useState } from "react";

export default function ImageSlider() {
  const Landing = () => {
    const [imgList, setImgList] = useState({});

    useEffect(() => {
      fetch(" ip, mock data 경로")
        .then((res) => res.json())
        .then((data) => {
          setImgList(data);
        });
    }, [setImgList]);
  };

  const Slider = ({ swiperList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleSlider(currentIndex) {
      if (currentIndex === swiperList.length) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = swiperList.length - 1;
      }
      setCurrentIndex(currentIndex);
    }

    function handleSwipe(direction) {
      handleSlider(currentIndex + direction);
    }
  };
}
