import React from "react";
import "../../assets/css/style.css";

const TeamCard = ({ image, title, desc, show }) => {
  // Define a class name based on the value of the show prop
  const cardClassName = show ? "event-card maincontainer show" : "event-card maincontainer";

  return (
    <div className={cardClassName}>
      <div className={`thecard ${show ? 'visible' : 'hidden'}`}>
        <div className="thefront">
          <img style={{ width: '100%', height: '100%', borderRadius: '20px' }} src={image} alt={title} />
        </div>
        <div className="theback">
          <h2 style={{fontSize:'36px', fontWeight:'initial',fontFamily:'serif'}}>{title}</h2>
          <p style={{fontSize:'28px',fontFamily:'cursive'}}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
