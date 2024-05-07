import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const Comment = ({ comment }) => {
  const [time, setTime] = useState(0);
  console.log(comment)
 useEffect(() => {
   const currentTime = new Date();
   const previousTime = new Date(comment?.time); // Example previous time

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
 }, [comment]);
  return (
    <div className="mb-4">
      <div className="flex items-end ">
        <img className="h-6 w-6 rounded-full" src={comment?.img} alt="" />
        <div className="flex items-center">
          <h1 className="ml-3 font-semibold text-md text-indigo-400">
            {comment?.name}{' '}
          </h1>
          <h2 className="ml-5 text-xs text-slate-400 flex items-center gap-1">
            <GoDotFill className='text-green-500'/>
            {time} ago
          </h2>
        </div>
      </div>

      <div className="mt-1 font-normal  text-[13px]">
        <h1 className="ml-10">{comment?.comment}</h1>
      </div>
    </div>
  );
};

export default Comment;