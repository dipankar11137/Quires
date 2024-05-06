import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Comment = ({comment}) => {
console.log(comment)
  return (
    <div className="mb-4">
      <div className="flex items-end ">
        <img
          className="h-6 w-6 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg"
          alt=""
        />
        <div className="flex items-center">
          <h1 className="ml-3 font-semibold text-md text-indigo-400">Abbus Ali </h1>
          <h2 className="ml-5 text-xs text-slate-400 flex items-center gap-1">
            <GoDotFill />4 Hour ago 
          </h2>
        </div>
      </div>

      <div className="mt-1 font-normal  text-[13px]">
        <h1 className='ml-10'>
        {comment?.comment}
        </h1>
      </div>
    </div>
  );
};

export default Comment;