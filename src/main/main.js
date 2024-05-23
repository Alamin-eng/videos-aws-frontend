import "./main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://videos-aws-backend.onrender.com/"
        );

        if (!response.data) {
          throw new Error(loading);
        } else {
          console.log(response.data);
        }
      } catch (error) {
        error= {"reply": "Server not responding"}
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div className="main"></div>;
}
//Re edit loading and fix the if statement. The api data receving successfully
