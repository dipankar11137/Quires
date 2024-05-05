import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaCommentAlt, FaShare } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoMdSend } from 'react-icons/io';
import './Scroll.css';

const HomeSection = () => {
  const [comment,setComment]=useState(false)
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
            <img
              className="h-10 w-10 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg"
              alt=""
            />
            <div className="flex items-center">
              <h1 className="ml-3 font-semibold ">Abbus Ali </h1>
              <h2 className="ml-5 text-xs text-slate-400 flex items-center gap-1">
                <GoDotFill />4 Hour ago
              </h2>
            </div>
          </div>

          <div className="mt-3 font-normal  text-lg">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              distinctio nam provident consequatur tenetur quia eveniet iusto
              modi illo saepe itaque, consectetur incidunt eos similique
              molestiae praesentium. Fuga qui ratione autem rerum eligendi
              libero, exercitationem explicabo itaque laborum repellat doloribus
              optio reiciendis error! Quod possimus libero delectus corporis
              enim dicta?
            </h1>
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
        {comment && (
          <div className="pb-1 mt-3 ml-3">
            {/* show comment */}
            <div className="p-3 h-44 overflow-y-scroll custom-scrollbar">
              <div className="mb-4">
                <div className="flex items-end ">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg"
                    alt=""
                  />
                  <div className="flex items-center">
                    <h1 className="ml-3 font-semibold text-sm">Abbus Ali </h1>
                    {/* <h2 className="ml-5 text-xs text-slate-400 flex items-center">
                  <LuDot />4 Hour ago
                </h2> */}
                  </div>
                </div>

                <div className="mt-2 font-normal  text-[13px]">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa distinctio nam provident consequatur tenetur quia
                    eveniet iusto modi illo saepe itaque, consectetur incidunt
                    eos similique molestiae praesentium. Fuga qui ratione autem
                    rerum eligendi libero, exercitationem explicabo itaque
                    laborum repellat doloribus optio reiciendis error! Quod
                    possimus libero delectus corporis enim dicta?
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex items-end ">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/133/583/small/man-with-glasses-and-headphones-logo-vector.jpg"
                    alt=""
                  />
                  <div className="flex items-center">
                    <h1 className="ml-3 font-semibold text-sm">Abbus Ali </h1>
                    {/* <h2 className="ml-5 text-xs text-slate-400 flex items-center">
                  <LuDot />4 Hour ago
                </h2> */}
                  </div>
                </div>

                <div className="mt-2 font-normal  text-[13px]">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa distinctio nam provident consequatur tenetur quia
                    eveniet iusto modi illo saepe itaque, consectetur incidunt
                    eos similique molestiae praesentium. Fuga qui ratione autem
                    rerum eligendi libero, exercitationem explicabo itaque
                    laborum repellat doloribus optio reiciendis error! Quod
                    possimus libero delectus corporis enim dicta?
                  </h1>
                </div>
              </div>
            </div>
            {/* add comment */}
            <div className="  flex mt-3">
              <textarea
                placeholder="Write your answer"
                className="w-full pl-2 pt-1 bg-slate-800 rounded-l-lg"
                type="text"
                name=""
                id=""
              />

              <button className="bg-slate-800">
                <IoMdSend className="w-14 text-2xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSection;