import React from 'react';

const AddPost = () => {
  return (
    <div className="bg-slate-800 m-2 p-2 rounded-lg">
      <div className='flex items-center gap-3'>
        <img
          className="h-12 w-12 rounded-full"
          src="https://i.pinimg.com/236x/ed/05/5f/ed055f0364e7fd93364d1bbe48d3631b.jpg"
          alt=""
        />
        <input className='w-full bg-slate-600 rounded-xl pl-2 py-1' placeholder="What's on your mind , Dipu ?" type="text" name="" id="" />
      </div>
    </div>
  );
};

export default AddPost;