import React from "react";

const Home = () => {
  return (
    <>
      <div className="row g-0" style={{ paddingTop: "5%" }}>
        <div className="col-6 col-md-4">
          <img
            src="https://i.pinimg.com/564x/4c/79/2f/4c792f515da0c167ed91a3850f33f76b.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div className="col-sm-6 col-md-8">
          <p style={{ textAlign: "center", paddingTop: "20%" }}>
            <h1>THE ART OF FASHION</h1>
            The worlds of art, architecture, image-making and fashion have long
            influenced each other. Each season, we go behind the scenes to
            discover what inspires today’s best designers
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
