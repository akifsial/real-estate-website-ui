import React from "react";
import { motion } from "framer-motion";
import bannervideo from "../../assets/videos/video-banner.mp4";
import Header from "../host/components/header";
import TopSection from "../pm/components/top-section";
import Footer from "../host/components/footer";
import HowItWorks from "./components/how-it-works";
import WhyChoose from "./components/why-choose";
import MatchingLogic from "./components/about-matching-logic";
import CreateAccount from "./components/create-free-account";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
function pm() {
  return (
    <>
      <div className="relative w-full video-height2 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <source src={bannervideo} type="video/mp4" />
        </video>

        {/* Dull overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Animated Header */}
        <motion.div
          className="relative  z-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Header />
        </motion.div>

        {/* Top section content */}
        <div className="top-position z-10 w-full">
          <TopSection />
        </div>
      </div>

      <div>
        <HowItWorks />
      </div>

      <div>
        <WhyChoose />
      </div>

      <div>
        <MatchingLogic />
      </div>

      <div>
        <CreateAccount />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <Faq />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default pm;
