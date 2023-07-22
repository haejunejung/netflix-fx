import React, { useEffect } from "react";
import axios from "axios";
import { handleFetch } from "./utils/functions";
import { API_PATHS } from "./utils/constants";

const App = () => {
  useEffect(() => {
    handleFetch(API_PATHS.MOVIES, (data) => {
      console.log(data);
    });
  }, []);

  return <div>test</div>;
};

export default App;
