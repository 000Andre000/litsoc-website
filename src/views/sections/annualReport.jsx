import React, { useState, useEffect } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ReportCard from "../../components/Cards/reportCard";
import loadgif from "../../assets/img/book.gif";
import "../../assets/css/style.css"

const Report = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTimeout, setLoadingTimeout] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-ap-south-1.hygraph.com/v2/clx5vchrx02x307t8ttm2m6fi/master?operationName=LitsocReports&query=query%20LitsocReports%20%7B%0A%20%20litsocReports%20%7B%0A%20%20%20%20id%0A%20%20%20%20reportTitle%0A%20%20%20%20reportDescription%0A%20%20%20%20report%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
        );
        setData(response.data.data.litsocReports);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setLoadingTimeout(false);
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading || loadingTimeout) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Full viewport height
          backgroundColor: "black",
        }}
      >
        <img src={loadgif} alt="loading" />
        {/* <p style={{ color: "white", marginLeft: "10px" }}>Loading...</p> */}
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bd" style={{
      width: "100%",
      backgroundColor: "black",
      height: "100vh",
      overflowY: "auto",
    }} >
      <IndexNavbar />
      <div className="reports" >
        {data.map((item, index) => (
          <div key={index} style={{ margin: '0 50px' }}>
            <ReportCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
