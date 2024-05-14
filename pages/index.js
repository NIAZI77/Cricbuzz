import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#212121] flex-col">
      <div>
        <h1 className="text-3xl font-bold text-center py-8 text-white">
          Watch Cricket Match Live
        </h1>
      </div>
      <div>
        <button className="btn mx-auto">
          <Link href={process.env.NEXT_PUBLIC_URL}>
          Watch
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
