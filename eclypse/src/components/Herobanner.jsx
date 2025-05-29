import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Herobanner() {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between md:flex-row px-4 md:px-2 py-6">
      <div className="flex md:ps-12">
        <img src="/assets/images/Hero_header.png" className="w-64" />
      </div>
      <div className="flex gap-8 md:gap-16 md:pe-12 text-xs self-end">
        @2025
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row px-4 md:px-2 py-6 md:ps-12 md:pe-12">
        <img src="/assets/images/Hero_mp4.png" className="h-auto w-full"></img>
      </div>
      <div className="container mx-auto flex flex-col items-start justify-start px-4 md:px-2 py-6 md:ps-12 md:pe-12">
        <p className="captionLine md:text-xxl text-[#070707] my-4 mb-8 w-full md:w-[510px]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>
        <Link to="/about" className="flex items-center gap-2 text-xs">
          Learn more about Eclypse
          <span>
            <ArrowUpRight size={16} />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 md:gap-5 px-4 md:px-2 py-6 w-full md:px-2 py-6 md:ps-12 md:pe-12">
        <div className="col-span-3 md:col-span-2">
          <img src="assets/images/girl-1.png" className="w-full h-full" />
        </div>
        <div className="">
          <img src="assets/images/girl-2.png" className="w-full" />
        </div>
        <div className="">
          <img src="assets/images/girl-3.png" className="w-full h-full" />
        </div>
        <div className="">
          <img src="assets/images/girl-4.png" className="w-full h-full" />
        </div>
        <div className="hidden md:block lg:block">
          <img src="assets/images/eclypseIcon.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
