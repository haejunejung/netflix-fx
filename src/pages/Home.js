import React from "react";

import Carousel from "../components/Carousel";
import HomeStream from "../components/HomeStream";
import Navigation from "../components/Navigation";

const Home = () => {
  //TODO urls
  const SLIDES = [
    {
      id: 1,
      title: "지금 뜨는 콘텐츠",
      url: "",
    },
    {
      id: 2,
      title: "어드벤쳐 드라마 & 영화",
      url: "",
    },
    {
      id: 3,
      title: "액션 드라마 & 영화",
      url: "",
    },
    {
      id: 4,
      title: "코메디 드라마 & 영화",
      url: "",
    },
  ];

  return (
    <>
      <Navigation />
      <HomeStream />
      {SLIDES.map((slide, idx) => {
        return <Carousel key={slide.id} title={slide.title} url={slide.url} />;
      })}
    </>
  );
};

export default Home;
