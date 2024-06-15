import "./main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "./card";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    
    const fetchData = async () => {
       try {
        
        const response = await axios.get(
          "https://videos-aws-backend.onrender.com/"
        );

        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
          console.log("Data fetched successfully:", response.data);
        } else {
          console.log("No data available.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        
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
      ) : data.length > 0 ? (
        <MainCard props={data}/>
      ) : (
        "No data available."
      )}
    </div>
  );
}

// Create a separate card function and add import in the main. 
// "https://videos-aws-backend.onrender.com/"
// "http://51.20.65.104:3001/"



 