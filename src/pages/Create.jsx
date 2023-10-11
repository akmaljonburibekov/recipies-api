import { useState } from "react";
function Create() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <p className="text-center text-4xl font-medium">Create New Recipie</p>
      <form className="w-[100%]">
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Title:</span>
          </label> 
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* ingredients */}
        <div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Ingredients:</span>
           </label>
          <div className="flex gap-5 mb-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-outline btn-success">Add</button>
          </div>
          <p>Ingredients: <span>Tuz, Go'sht, Suv</span></p>
        </div>
        </div>


        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Cooking time:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            type="url"
            placeholder="Past URL"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea 
          type="text"
          placeholder="Type here"
          className="textarea input-bordered w-full max-w-xs"
          ></textarea>
        </div>
        <button className="btn btn-secondary">Create</button>
      </form>
    </div>
  );
}

export default Create;
