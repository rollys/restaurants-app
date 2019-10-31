import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async newTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: newTerm,
          location: "san jose"
        }
      });
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMessage("Intentelo de nuevo!!!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, result, errorMessage];
};
