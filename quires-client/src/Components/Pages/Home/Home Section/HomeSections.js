import React, { useEffect, useState } from 'react';
import HomeSection from './HomeSection';

const HomeSections = () => {
  const [quires, setQuires] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/quires')
      .then(res => res.json())
      .then(data => setQuires(data));
  }, [quires]);
  return (
    <div className="pt-1 px-3 text-slate-300">
      <div>
        {quires.slice().reverse().map(quire => (
          <HomeSection key={quire._id} quire={quire} />
        ))}
      </div>
    
    </div>
  );
};

export default HomeSections;