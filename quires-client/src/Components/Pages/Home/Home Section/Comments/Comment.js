import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Comment = () => {

  return (
    <div className="mb-4">
      <div className="flex items-end ">
        <img
          className="h-6 w-6 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg"
          alt=""
        />
        <div className="flex items-center">
          <h1 className="ml-3 font-semibold text-sm">Abbus Ali </h1>
          <h2 className="ml-5 text-xs text-slate-400 flex items-center gap-1">
            <GoDotFill />4 Hour ago 
          </h2>
        </div>
      </div>

      <div className="mt-2 font-normal  text-[13px]">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          distinctio nam provident consequatur tenetur quia eveniet iusto modi
          illo saepe itaque, consectetur incidunt eos similique molestiae
          praesentium. Fuga qui ratione autem rerum eligendi libero,
          exercitationem explicabo itaque laborum repellat doloribus optio
          reiciendis error! Quod possimus libero delectus corporis enim dicta?
        </h1>
      </div>
    </div>
  );
};

export default Comment;