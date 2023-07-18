import React, { useEffect, useState } from "react";
import './style.css'


const Skincare = () => {
  const [skincare, setSkincare] = useState([]);

  const fetchSkincare = async () => {
    const skincare = await fetch(`http://localhost:3000/skincare`);
    let result = await skincare.json();
    setSkincare([...result]);
  };

  useEffect(() => {
    fetchSkincare();
  }, []);
  return (
    <>
      <br />
      <h1>SKINCARE</h1>
      <br />
      <h3>- Somethinc -</h3>
      <div className="d-flex flex-wrap">
        {skincare.map((x, index) => (
          <div key={index}>
            <div className="card">
              <img
                className="skincare"
                src={`${x.image}`}
                width="5%"
                height="5%"
              />
              <h4>{x.name}</h4>
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skincare;
