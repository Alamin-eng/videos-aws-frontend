import "./main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ""
        );

        if (response.data && Array.isArray(response.data)) {
          
          setData(response.data);
          console.log("Data fetched successfully:", response.data);
        } else {
          console.log("No data available in response or data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      {loading ? (
        "Loading, please wait!"
      ) : error ? (
        <div className="error">{error}</div>
      ) : data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        "No data available."
      )}
    </div>
  );
}

//Re edit useEffect with fetch(). The api data receving successfully
// "https://videos-aws-backend.onrender.com/"
