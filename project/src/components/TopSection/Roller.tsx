import React, { useEffect, useState } from 'react';



const words = ['motion', 'webapps', 'Games', 'mobile apps', 'things'];

function Roller() {
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="roller">
      <div className="wordContainer">
        {words.map((word, i) => (
          <h1
            key={i}
            className={`word ${i === index ? 'active' : ''}`}
          >
            {word}
          </h1>
        ))}
      </div>
    </div>
  );

};


export default Roller