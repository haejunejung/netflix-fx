import React, { useEffect, useState } from "react";
import styled from "styled-components";

import UseInterval from "./UseInterval";
import Streaming from "./Streaming";

const HomeStream = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [movie, setMovie] = useState([]);

  //* fetch the movie
  const handleMovieFetch = (movie) => {
    setMovie(movie);
  };

  //* turn on the movie
  const handleDisplayOn = () => {
    if (!isDisplay) {
      setIsDisplay(true);
    }
  };

  //* turn off the movie
  const handleDisplayOff = () => {
    if (isDisplay) {
      setIsDisplay(false);
    }
  };

  //* turn on every 5000ms
  UseInterval(handleDisplayOn, 5000);

  useEffect(() => {
    //TODO : fetch the movie
    //* use handleMovieFetch
  }, []);

  return <MainContainer></MainContainer>;
};

export default React.memo(HomeStream);

const MainContainer = styled.div`
  position: relative;
  height: 90vh;
  background-color: black;
  opacity: 0.5;
`;

const Selection = styled.div``;
