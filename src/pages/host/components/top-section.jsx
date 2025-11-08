import React, { useEffect, useRef, useState } from "react";
import bannervideo from "../../../assets/videos/video-banner.mp4";
import bannerOverview from "../../../assets/videos/banner-overview.mp4";
import TopRightArrow from "../../../assets/svgs/top-right-arrow.svg";
import ArrowRight from "../../../assets/svgs/arrow-right.svg";
import pauseIcon from "../../../assets/svgs/pause-icon.svg";
import { motion } from "framer-motion";

import { ReactSVG } from "react-svg";
function TopSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Autoplay blocked:", err));
    }
  }, []);

  return (


    <section className="w-full text-white flex items-center justify-center sm:px-6 px-5 lg:px-[135px]">
      <div className="w-full flex-wrap-top flex flex-col gap-[0px] lg:flex-row items-center justify-between gap-[20px]">
        {/* LEFT SIDE */}
        <motion.div
          className="relative lg:block  z-10"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="space-y-4 ">
            {/* Tagline */}
            <p className=" bg-[#0000001A] border border-[#818181] text-sm md:text-[20px] text-white font-normal inline-block px-[16px] py-[6px] rounded-full">
              Welcome to{" "}
              <span className="text-[#61b7d2] font-semibold">
                Host<span className="text-[#EF999A]">Switch</span>
              </span>
            </p>

            {/* Heading */}


            {/* Heading */}


            <h1 className="md:w-[600px] w-full text-4xl md:text-5xl font-light leading-tight playfair-display-uniquifier">
              <span className=" text-white  playfair-display-uniquifier !italic">
                Find the Perfect
              </span>{" "}
              Property Management Company
            </h1>

            <p className="text-white text-lg max-w-[516px]">

              The Nations #1 Short Term Rental Management Matchmaker <b> 100% Free </b>to Vacation <b> Property Owners</b>             </p>

            {/* Button */}
            <button className="cursor-pointer bg-[#EF999A] hover:bg-[#61b7d2] transition-colors duration-300 ease-in-out rounded-full text-white font-medium py-3 px-8 flex items-center gap-2">
              Get Started It’s Free
              <ReactSVG src={ArrowRight} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Video Section) */}
        <motion.div
          className="relative lg:block  z-10"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full lg:w-[380px] md:w-[500px]">
            {/* Video */}
            <div className="bg-[#00000069] border border-[#A9A9A94D] p-[14px] rounded-2xl relative">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl"
                onClick={handlePlayPause}
                muted
                preload="metadata"
                poster="https://via.placeholder.com/480x270"
              >
                <source src={bannerOverview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                  }`}
              >
                <div className="relative flex items-center justify-center">
                  <span className="bloom-plate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                  <span className="bloom-plate-small absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>

                  <button
                    onClick={handlePlayPause}
                    className="relative z-10 flex items-center justify-center bg-white text-black rounded-full p-4 transition-transform hover:scale-110"
                  >
                    <ReactSVG src={pauseIcon} />
                  </button>
                </div>
              </div>
            </div>




            {/*  Testimonial */}
            <div className="bottom-3 flex justify-between left-3 bg-[#00000069] backdrop-blur-md px-4 py-4 rounded-[20px] mt-[8px] border border-[#A9A9A9] gap-2 text-sm text-white">
              <div>
                <div className="flex -space-x-2 mb-[4px]">
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=1"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=2"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=3"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=3"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=3"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=1"
                    alt="owner"
                  />
                  <img
                    className="w-6 h-6 rounded-full border border-white"
                    src="https://i.pravatar.cc/40?img=2"
                    alt="owner"
                  />
                </div>
                <span className="sm:text-[14px] text-[10px] mt-5">12,000+ Happy Property Manager</span>
              </div>

              <div className="bg-[#FFFFFF33] cursor-pointer flex justify-center items-center p-[12px] rounded-[12px]">
                <ReactSVG src={TopRightArrow} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TopSection;
