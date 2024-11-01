import React from "react";

const Newsletter = () => {
  const onsumbithandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" border-gray-400">
      <div className="text-center">
        <p className="text-2xl text-gray-800 font-medium">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 mt-3">
          Join Our Community – Subscribe Now for 20% Off Your First Order!
        </p>
        <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input
            className="w-full sm:flex outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            onSubmit={onsumbithandler}
            type="sumbit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
