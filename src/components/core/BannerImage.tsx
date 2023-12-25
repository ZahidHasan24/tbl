import React from "react";
import HeroImg from "../../assets/img/hero.png";
import PlayImg from "../../assets/img/play.png";
import ThreeLinesImg from "../../assets/img/three-lines.png";

const BannerImage: React.FC = () => {
  return (
    <div className="flex items-center justify-center relative sm:w-full md:w-full lg:w-1/2 xl:w-1/2 lg:pl-24 z-10">
      <div className="relative">
        <img src={HeroImg} alt="hero" className="rounded-[21px] mt-10" />
        <div className="absolute left-[-20px] top-5">
          <img src={ThreeLinesImg} alt="threelines" />
        </div>
      </div>
      <div className="absolute pl-2 pr-2.5 py-2 bg-white rounded-[200px] shadow justify-start items-center gap-[7px] inline-flex sm:right-2 sm:top-12 md:right-20 md:top-20 lg:right-2 lg:top-20 xl:right-0 xl:top-[85px]">
        <div className="w-[30px] h-[30px] relative">
          <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full"></div>
          <div className="left-[6px] top-[2px] absolute text-white text-lg font-semibold font-inter leading-relaxed">
            🤘
          </div>
        </div>
        <div className="text-gray-800 text-base font-semibold font-clash leading-relaxed">
          Brand Promoter
        </div>
      </div>
      <div className="absolute sm:left-50 sm:top-50 md:left-50 md:top-50 lg:left-0 lg:top-12 xl:-left-2 xl:top-12">
        <img src={PlayImg} alt="play" />
      </div>
    </div>
  );
};

export default BannerImage;
