import React from 'react';
import PostCart from './PostCart';

const AddPost = () => {
  return (
    <div>
      <label htmlFor="my_modal_6" className="">
        <div className="bg-slate-800 m-2 p-2 rounded-lg hover:cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://i.pinimg.com/236x/ed/05/5f/ed055f0364e7fd93364d1bbe48d3631b.jpg"
              alt=""
            />
            <h1 className="w-full bg-slate-600 rounded-xl pl-2 py-1 text-slate-300">
              What's on your mind , Dipu ?
            </h1>
            
          </div>
          <div className="mt-3 pb-1 flex justify-between mx-14">
            <div className="flex items-end gap-1">
              <img
                className="h-6 w-8"
                src="https://pngimg.com/d/question_mark_PNG128.png"
                alt=""
              />
              <h1>Queries / Doubt</h1>
            </div>
            <div className="flex items-end gap-1">
              <img
                className="h-6 w"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeG1xCg32b7FWHVC8g2NUytnPL4YoeGsw5I8vhih4azDkqbAzgM-c07omE01n3-Yd6GAIb3tRCdKcVncSqWwtR5d"
                alt=""
              />
              <h1>Photo</h1>
            </div>
            <div className="flex items-end gap-1">
              <img
                className="h-6 w "
                src="https://cdn-icons-png.flaticon.com/512/8899/8899643.png"
                alt=""
              />
              <h1>Solution / Fixed</h1>
            </div>
          </div>
        </div>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <PostCart />
      </div>
    </div>
  );
};

export default AddPost;