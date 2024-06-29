import React, { useState, useEffect } from "react";
import TeamCard from "components/Cards/TeamCard"; // Adjust the path based on your project structure
import { Container, Row, Col } from "reactstrap";
import bgimg from "../../assets/img/cartographer.png";
import axios from "axios";

function CoreTeam() {
  const [showCardCol1, setShowCardCol1] = useState(false);
  const [showCardCol2, setShowCardCol2] = useState(false);
  const [showCardCol3, setShowCardCol3] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const triggerPosition = 4000; // Adjust this value according to your needs
      

      if (scrollPosition >= triggerPosition) {
        setTimeout(() => {
          setShowCardCol1(true);
        }, ); // Load column 2 after 1 second

        setTimeout(() => {
          setShowCardCol2(true);
        }, 2000); // Load column 2 after 1 second

        setTimeout(() => {
          setShowCardCol3(true);
        }, 3000); // Load column 3 after 2 seconds
      }
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ap-south-1.cdn.hygraph.com/content/clx5vchrx02x307t8ttm2m6fi/master?query=query%20Assets%20%7B%0A%20%20litsocCoreTeams%20%7B%0A%20%20%20%20position%0A%20%20%20%20name%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=Assets"
        );
        setData(response.data.data.litsocCoreTeams);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    
  }, []);

  if (loading) {
    return <div>{}</div>; // You can replace this with a loading spinner or message
    
  }

  // const cleanData =()=>{
  //   const member = data.find((member) => member.position === "Event Coordinator 2");
  //   member.position = "Event Coordinator"
  // }

  const renderTeamMember = (position) => {
    
    const member = data.find((member) => member.position === position);
    
    if (!member) return (
      <TeamCard
      key=""
      image=""
      title=""
      desc=""
      show=""
    />
    );
    return (

     
      <TeamCard
        
        image={member.image.url}
        title={position === "Event Coordinator 2"?"Event Coordinator":member.position} // add more condition acc to requirements
        desc={member.name}
        show={
          position === "Chairperson"||position === "Secratary"||position === "PR Coordinator"
            ? showCardCol1
            : position === "Convenor"||position === "Event Coordinator2"||position === "Event Coordinator"
            ? showCardCol2
            : showCardCol3
        }
      />
    );
  };

  return (
    <div style={{ backgroundImage: `url(${bgimg})`, marginTop: "600px" ,backgroundColor:'black'}}>
      
      <div>
        <h1
          className="title"
          style={{
            marginTop: "0",
            paddingTop: "40px",
            marginLeft: "120px",
            color: "#F8FAE5",
            fontFamily: "serif",
          }}
        >
          Our Team
        </h1>
      </div>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Col>
            {renderTeamMember("Chairperson")}
            {renderTeamMember("Event Coordinator 2")}
            {renderTeamMember("PR Coordinator")}
          </Col>
          <Col>
            {renderTeamMember("Convenor")}
            {renderTeamMember("Secratary")}
            {renderTeamMember("Event Coordinator")}
          </Col>
          <Col>
            {renderTeamMember("Editorial Head")}
            {renderTeamMember("Assistant Editor")}
            {renderTeamMember("")}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CoreTeam;
