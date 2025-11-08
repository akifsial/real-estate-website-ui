// import React from 'react'
// import Header from './components/header'
// import bannervideo from "../../assets/videos/video-banner.mp4"
// import TopSection from './components/top-section'

// function Host() {
//     return (

//         <div className="relative w-full h-screen overflow-hidden">
//             {/* Background video */}
//             <video
//                 autoPlay
//                 muted
//                 loop
//                 className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
//             >
//                 <source src={bannervideo} type="video/mp4" />
//             </video>

//             {/* Dull overlay */}
//             <div className="absolute inset-0 bg-black/60 z-10"></div>

//             {/* Header */}
//             <div className="relative lg:block hidden z-20">
//                 <Header />
//             </div>

//             {/* Top section content */}
//             <div className="absolute top-[35%] z-20 w-full">
//                 <TopSection />
//             </div>
//         </div>

//     )
// }

// export default Host

import React from "react";
import { motion } from "framer-motion";
import Header from "./components/header";
import bannervideo from "../../assets/videos/video-banner.mp4";
import TopSection from "./components/top-section";
import HowItWorks from "./components/HOW-IT-WORKS.JSX";
import WhyChoose from "./components/why-choose";
import Footer from "./components/footer";

function Host() {

    return (
        <>
            <div className="relative w-full video-height overflow-hidden">
                {/* background video */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-[-99999]"
                >
                    <source src={bannervideo} type="video/mp4" />
                </video>

                {/* Dull overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* animated Header */}
                <motion.div
                    className="relative  z-[99999]"
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
                <Footer />
            </div>
        </>
    );
}

export default Host;
