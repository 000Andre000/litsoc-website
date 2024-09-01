import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "turn.js";
import axios from "axios";
import pg0 from "../../assets/img/event_Book/events_cov.png";
import pg1 from "../../assets/img/event_Book/cov_in.jpg";
import pg2 from "../../assets/img/event_Book/cov_last.jpg";
import loadgif from "../../assets/img/book.gif";
import IndexNavbar from "components/Navbars/IndexNavbar";
import "./eventStyle.css";
import "../../assets/css/style.css";
import Turn from "./turn";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoadingGif, setShowLoadingGif] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const turnRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 }); 
  const [type, setType] = useState("double");
  const [sliderValue, setSliderValue] = useState(0);
  const [oldValue, setOldValue] = useState(0); // State to keep track of previous slider value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ap-south-1.cdn.hygraph.com/content/clx5vchrx02x307t8ttm2m6fi/master?query=query%20LitSocs%20%7B%0A%20%20litSocs%20%7B%0A%20%20%20%20title%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%7D%0A%20%20%20%20descr%0A%20%20%20%20content%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%20%20eventimage%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=LitSocs"
        );
        setData(response.data.data.litSocs);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setShowLoadingGif(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Update dimensions based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setDimensions({ width: 500, height: 400 }); 
        setType("single");
      } else {
        setDimensions({ width: 800, height: 600 }); 
        setType("double");
      }
    };

    // Initial call to handleResize
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (item) => {
    sessionStorage.setItem("eventItem", JSON.stringify(item));
    navigate("/event/eventreport");
  };

  const handleNextPage = () => {
    if (turnRef.current) {
      turnRef.current.turnNext();
    }
  };

  const handlePrevPage = () => {
    if (turnRef.current) {
      turnRef.current.turnPrevious();
    }
  };

  const handleChange = (event, newValue) => {
    setSliderValue(newValue); // Update state with new slider value
    // Log the slider value to console
    console.log("Slider value:", newValue);

    // Determine if we need to turn next or previous based on the change
    if (oldValue > newValue) {
      turnRef.current.turnPrevious();
    } else if (oldValue < newValue) {
      turnRef.current.turnNext();
    }

    // Update oldValue to current newValue for next comparison
    setOldValue(newValue);
  };

  if (loading || showLoadingGif)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <img src={loadgif} alt="loading" />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  // Options for the Turn.js component
  const options = {
    width: dimensions.width,
    height: dimensions.height,
    autoCenter: true,
    display: type,
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function (e, page) {
        console.log("Current view: ", $(this).turn("view"));
      },
    },
  };

  return (
    <div
      className="bd"
      style={{
        width: "100vw",
        backgroundColor: "black",
        overflowY: "hidden",
        height: "100vh",
        paddingBottom: "100px",
      }}
    >
      <div id="overlay"></div>
      <IndexNavbar style={{ marginTop: "0", paddingTop: "0" }} />
      <div className="eb">
        <Turn options={options} className="magazine eventbooks" ref={turnRef}>
          <div key="0" className="page hard">
            <img className="event-poster" src={pg0} alt="" />
          </div>
          <div key="1" className="page">
            <img className="event-poster" src={pg1} alt="" />
          </div>
          {data.map((item, index) => (
            <div className="page" key={index} onClick={() => handleClick(item)}>
              <img
                style={{ zIndex: 1 }}
                className="event-poster"
                src={item.image.url}
                alt={item.title}
              />
            </div>
          ))}
          <div key="2" className="page hard">
            <img src={pg2} alt="" />
          </div>
        </Turn>
        <div className="event-sec-btn">
          <i className="fa fa-chevron-left butn lbtn" onClick={handlePrevPage}></i>
          <i className="fa fa-chevron-right butn rbtn" onClick={handleNextPage}></i>
        </div>
      </div>

     {/* <Box sx={{width:'200'}}>
        <Slider className="slider" style={{color:'red', position:'relative',top:'400px'}}
        
          value={sliderValue}
          
        
          onChange={handleChange}
          max={data.length + 3}
        />
     </Box> */}
{/* 
     <Box sx={{ width: 300 }}>
      <Slider className="slider"
        aria-label="Temperature"
        value={sliderValue}
        onChange={handleChange}
        max={data.length + 3}
        style={{color:'#d4b186'}}
      />
    </Box> */}
      
    </div>
  );
};

export default Events;
