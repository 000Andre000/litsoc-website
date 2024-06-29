import React, { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import paper from "../../assets/img/papyrus-146302_1280.png";

function EventReport() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const storedItem = sessionStorage.getItem("eventItem");
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);

  console.log(item);

  return (
    <div
      className=" bd"
      style={{
        height: "125vh",
        overflowY: "auto",
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IndexNavbar scrolly={0} />
      <div
        style={{
          backgroundImage: `url(${paper})`,
          // backgroundColor:'white',
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
          color: "black",
          position: "relative",
          top: "370px",
          width: "200vh",
          paddingTop: "100px",
          paddingBottom: "100px",
          marginTop: "600px",
        }}
      >
        <h1 style={{ zIndex: "999", fontFamily: "serif" }}>
          {item ? item.title : "Title Not Available"}
        </h1>
        {item && (
          <div
            style={{
              zIndex: "999",
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",

              padding: "0 200px 50px 200px",
            }}
          >
            <img
              style={{ width: "100vh", height: "100vh" }}
              src={item.image.url}
              alt={item.image.fileName}
            />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                color: "#000",
                lineHeight: "2rem",
              }}
              className="event-content"
            >
              {item.descr}
            </p>
            {console.log(item.content.html)}
            <div
              className="event-content"
              dangerouslySetInnerHTML={{ __html: item.content.html }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventReport;
