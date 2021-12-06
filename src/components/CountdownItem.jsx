import { useState, useEffect } from "react";

const CountdownItem = ({ digit, label }) => {
  const [flip, setFlip] = useState({
    transform: "rotateX(0deg)",
    transition: "0s",
  });

  useEffect(() => {
    setFlip({ transform: "rotateX(-180deg)", transition: "0.3s" });
    setTimeout(() => {
      setFlip({ transform: "rotateX(0deg)", transition: "0s" });
    }, 500);
  }, [digit]);

  return (
    <figure className="card">
      <h1 className="digit">{digit}</h1>
      <div className="flip-card">
        <h1 className="digit">{digit}</h1>
        <div className="flipcard-inner" style={flip}>
          <div className="digit-container-1">
            <div className="middle-line"></div>
            <h1 className="digit">{digit}</h1>
          </div>
          <div className="digit-container-2">
            <div className="middle-line"></div>
            <h1 className="digit">{digit}</h1>
          </div>
        </div>
      </div>
      <p>{label}</p>
    </figure>
  );
};

export default CountdownItem;
