import React, { useEffect, useState } from "react";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  const fetchshoes = async () => {
    const shoes = await fetch("http://localhost:3000/shoes");
    let result = await shoes.json();
    setShoes([...result]);
  };

  useEffect(() => {
    fetchshoes();
  }, []);
  return (
    <>
      <br />
      <h1>SHOES</h1>
      <br />
      <h3>- Nike -</h3>
      <p>Basketball Shoes</p>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {shoes.map((x, index) => (
            <div key={index}>
              <div className="col">
                <div className="p-3 border bg-light">
                  <img src={`${x.image}`} width="100%" />
                  <h6>{x.name}</h6>
                  <p>{x.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shoes;
