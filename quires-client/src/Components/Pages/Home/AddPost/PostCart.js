import React from 'react';
import { useForm } from 'react-hook-form';

const PostCart = () => {
   const {
     register,
     formState: { errors },
     handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="modal-box">
      <div className="modal-action fixed right-0 -top-6">
        <label
          htmlFor="my_modal_6"
          className="bg-slate-700 px-3 py-1 rounded-full cursor-pointer"
        >
          x
        </label>
      </div>
      <div>
        <h1 className="text-center -mt-5 font-semibold border-b-[1px] pb-2 border-slate-600">
          Create Post
        </h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Quires / Question</span>
            </label>
            <textarea
              type="text"
              placeholder="Write yours quires"
              className="input input-bordered bg-slate-600 w-full  pt-1 h-32 text-slate-100"
              {...register('description', {})}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              placeholder="Image"
              className="input input-bordered bg-slate-600 w-full pt-1"
              {...register('img', {
               
               
              })}
            />
           
          </div>

          <input
            className="btn btn-primary w-full text-white mt-3"
            type="submit"
            value="Post"
          />
        </form>
      </div>
    </div>
  );
};

export default PostCart;