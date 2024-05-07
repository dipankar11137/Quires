
import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import Comment from './Comment';

const Comments = ({ quire, comments }) => {
  const [comment, setComment] = useState('');

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const date = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // Format the current time
  const formattedTime = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;

  const handlePost = () => {
    const updateComment = {
      pId: quire?._id,
      name: quire?.name,
      img: quire?.img,
      email: quire?.email,
      time: formattedTime,
      comment,
    };
    fetch(`http://localhost:5000/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateComment),
    })
      .then(res => res.json())
      .then(data => {
        setComment('');
      });
  };
  return (
    <div className="pb-1 mt-3 ml-3">
      {/* show comment */}
      <div>       
        {comments.length === 0 ? (
           <div className="p-3 h-16 overflow-y-scroll custom-scrollbar">
            <h1>No Comments Here</h1>  </div>
          ) : (
            <div className="p-3 h-40 overflow-y-scroll custom-scrollbar">
              {' '}
              {comments
                .slice()
                .reverse()
                .map(comment => (
                  <Comment key={comment?._id} comment={comment} />
                ))}
             </div>
          )}
        </div>
     

      {/* add comment */}
      <div className="  flex mt-3">
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Write your answer"
          className="w-full pl-2 pt-1 bg-slate-800 rounded-l-lg"
          type="text"
          name=""
          id=""
        />

        {comment ? (
          <button onClick={handlePost} className="bg-slate-800">
            <IoMdSend className="w-14 text-2xl" />
          </button>
        ) : (
          <button className="bg-slate-800">
            <IoMdSend className="w-14 text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Comments;