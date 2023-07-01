import React from "react";
import styled from "styled-components";

import bannerLogo from "../assets/logo.jpg";
import Carousel from "../components/Carousel";
import HomeStream from "../components/HomeStream";
import Navigation from "../components/Navigation";

const Home = () => {
  const menu = ["Home", "Tv Shows", "Movies", "Latest", "My List"];

  //TODO urls
  const slides = [
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
      {/* <NavBar>
        <NetflixLogo src={bannerLogo} />
        {menu.map((data, idx) => {
          return <Text>{data}</Text>;
        })}
      </NavBar> */}
      <Navigation />

      <HomeStream />
      {slides.map((slide, idx) => {
        return <Carousel key={slide.id} title={slide.title} url={slide.url} />;
      })}
    </>
  );
};

export default Home;

// const NavBar = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 5px 45px;
//   height: 10vh;
//   margin-top: 10px;
// `;

// const NetflixLogo = styled.img`
//   left: 45px;
//   top: 10px;
//   width: 120px;
//   height: 60px;
//   margin-right: 20px;
// `;

// const Text = styled.span`
//   font-size: large;
//   margin-left: 10px;
// `;
