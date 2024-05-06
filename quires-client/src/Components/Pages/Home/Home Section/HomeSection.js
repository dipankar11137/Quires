import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaCommentAlt, FaShare } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import Comments from './Comments/Comments';
import './Scroll.css';

const HomeSection = ({ quire }) => {
  const [comment, setComment] = useState(false);
 const [time, setTime] = useState(0);

 useEffect(() => {
   const currentTime = new Date();
   const previousTime = new Date(quire?.pTime); // Example previous time

   // Calculate the difference in milliseconds
   const differenceMs = Math.abs(currentTime - previousTime);

   // Convert difference to minutes, hours, and days
   let differenceMinutes = Math.floor(differenceMs / (1000 * 60));
   let differenceHours = Math.floor(differenceMinutes / 60);
   let differenceDays = Math.floor(differenceHours / 24);
   let differenceMonth = Math.floor(differenceDays / 30);

   // Handle crossing 60 minutes to hours
   differenceMinutes %= 60;

   // Set the time based on the largest non-zero unit
    if (differenceMonth > 0) {
      setTime(`${differenceMonth} month`);
    } else if (differenceDays > 0) {
      setTime(`${differenceDays} days`);
    } else if (differenceHours > 0) {
      setTime(`${differenceHours} hours`);
    } else {
      setTime(`${differenceMinutes} minutes`);
    }
 }, [quire]);


 
  return (
    <div className="border-b-[1px] border-slate-600 pb-2 mb-3">
      {' '}
      <div className="  ">
        <div className="hover:bg-slate-700 px-2 pt-2  hover:cursor-pointer  rounded-xl">
          <div className="flex items-end ">
            {comment && (
              <button
                onClick={() => setComment(false)}
                className="text-3xl mr-3 mb-1"
              >
                <FaArrowAltCircleLeft />
              </button>
            )}
            <img className="h-10 w-10 rounded-full" src={quire?.img} alt="" />
            <div className="flex items-center">
              <h1 className="ml-3 font-semibold ">{quire?.name} </h1>
              <h2 className="ml-5 text-xs text-slate-400 flex items-center gap-1">
                <GoDotFill className="text-green-600" />
                {time} ago
              </h2>
            </div>
          </div>

          <div className="mt-3 font-normal  text-lg">
            {quire?.image && (
              <img className="w-full h-[300px]" src={quire?.image} alt="" />
            )}

            <h1>{quire?.description}</h1>
          </div>

          <div className="mt-4 pb-2 flex items-center ">
            <button
              onClick={() => setComment(prevComment => !prevComment)}
              className="ml-2 bg-slate-800 hover:bg-slate-900 px-3 py-1 rounded-full flex items-center gap-2"
            >
              <FaCommentAlt /> 521
            </button>
            <button className="ml-2 bg-slate-800 hover:bg-slate-900 px-3 py-1 rounded-full flex items-center gap-2">
              <FaShare /> Share
            </button>
          </div>
        </div>

        {comment && <div className="w-72 h-[1px] bg-slate-700 mt-1"></div>}
        {/* comment */}
        {comment && <Comments quire={quire} />}
      </div>
    </div>
  );
};

export default HomeSection;