import React from "react";
import Lottie from "lottie-react";
import animationData from "../utils/lottiesAnimation/Header.json";

const Sider: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start p-10">
      <div className="w-full lg:w-[80%] mb-6">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-800">
        Discover Your Best Products Here
      </h1>
      <p className="text-gray-500 mb-2">
        Explore all the most exciting products.
      </p>
      <p className="text-gray-500">Based on your interest and needs.</p>
    </div>
  );
};

export default Sider;
