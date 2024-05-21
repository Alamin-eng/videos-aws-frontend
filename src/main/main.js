import "./main.css";
import React, { useEffect, useState } from "react";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://videos-aws-backend.onrender.com/"
        );
        if (!response.ok) {
          throw new Error(loading);
        }
        const result = await response.json();

        setData(result);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div className="main"></div>;
}
//Re edit from scratch. The api data receving successfully
