import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-center">
        Watch cricket match live
      </h1>
      <button className="scale-150 mx-auto my-8 relative left-20">
        <Link href={process.env.link}>
          Watch
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </Link>
      </button>
    </div>
  );
}
