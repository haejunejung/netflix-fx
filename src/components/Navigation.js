import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import bannerlogo from "../assets/logo.jpg";
import profilelogo from "../assets/profile.jpg";
import { CardGiftcard, Notifications, Search } from "@mui/icons-material";

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);

  const navigate = useNavigate();

  const menu = [
    {
      title: "Home",
      navigate: "/home",
    },
    {
      title: "Tv Shows",
      navigate: "/tvshows",
    },
    {
      title: "Movies",
      navigate: "/movies",
    },
    {
      title: "Latest",
      navigate: "/latest",
    },
    {
      title: "My Lists",
      navigate: "/mylists",
    },
  ];

  //   const menu = ["Home", "Tv Shows", "Movies", "Latest", "My List"];

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBar isScroll={isScroll}>
      <NavBarLeft>
        <NetflixLogo src={bannerlogo} />
        {menu.map((data, idx) => {
          return (
            <Text
              key={idx}
              onClick={() => {
                navigate(`${data.navigate}`);
              }}
            >
              {data.title}
            </Text>
          );
        })}
      </NavBarLeft>
      <NavBarRight>
        <ProfileLogo src={profilelogo} />
        <Search />
        <CardGiftcard />
        <Notifications />
      </NavBarRight>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 45px;
  height: 10vh;
  margin-top: 10px;
  justify-content: space-between;

  position: ${(props) => (props.isScroll ? "sticky" : "relative")};
  background: ${(props) =>
    props.isScroll ? "rgb(15, 15, 15)" : "transparent"};
  z-index: 999;
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarRight = styled.nav`
  display: flex;
  align-items: center;
`;

const NetflixLogo = styled.img`
  left: 45px;
  top: 10px;
  width: 120px;
  height: 60px;
  margin-right: 20px;
`;

const Text = styled.span`
  font-size: large;
  margin-left: 10px;
`;

const ProfileLogo = styled.img`
  width: 30px;
  height: 20px;
`;
