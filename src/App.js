import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  const callApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movies");
      console.log(response);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div>test</div>;
};

export default App;
