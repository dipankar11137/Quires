import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeSections from './Home Section/HomeSections';

const Home = () => {
 
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="pt-[66px] text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-r-[1px] border-slate-500 ">
          <div className="fixed mt-5 ml-5">
            <h1>Dado</h1>
          </div>
        </div>
        <div className="col-span-6">
          <HomeSections />
        </div>
        <div className="col-span-3 border-l-[1px] border-slate-500">
          <div className="fixed mt-5 ml-5">
            <h1>Dadona</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
