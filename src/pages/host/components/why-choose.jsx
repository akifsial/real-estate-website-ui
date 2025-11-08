import React from 'react'
import house1 from "../../../assets/images/house_1.png"
import { ReactSVG } from 'react-svg';
import star from "../../../assets/svgs/star.svg"
import { motion } from "framer-motion";

function WhyChoose() {

    const motionSettings = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
    };
    return (


        <section id="why-choose" className=" mx-auto sm:px-6 px-5 lg:px-[135px] py-16 bg-[#61B7D205]">
            <h1></h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side (Image + Review Card) */}
                <div className="overflow-hidden">

                    <motion.div
                        className="relative flex h-full justify-center items-center"
                        {...motionSettings}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="w-full relative h-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={house1}
                                alt="Modern house"
                                className="w-full h-full object-cover rounded-2xl"
                            />

                            {/* Review Card */}
                            <div className="absolute bottom-6 right-5 bg-[#A9A9A9]/60 backdrop-blur-sm shadow-md rounded-md p-4 w-[80%]">
                                <p className="text-[16px] text-black leading-snug">
                                    I got{" "}
                                    <span className="font-semibold text-black">3 solid matches</span>{" "}
                                    within a day. Ended up increasing my monthly income by 40%.
                                </p>
                                <div className="flex items-center gap-1 mt-2 text-sm font-semibold text-[#0077b6]">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <ReactSVG key={i} src={star} />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side (Text Content) */}
                <div className='overflow-hidden'>

                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: 100 }} // starts from right side
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="playfair-display-uniquifier text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                            Why Choose HostSwitch
                        </h2>

                        <p className="text-black mb-8 text-base md:text-lg">
                            Property management, simplified.
                        </p>

                        {/* Steps */}
                        <div className="grid gap-6">
                            <div className="flex items-start gap-4">
                                <div className="px-[11px] py-[10px] rounded-full bg-white border border-[#0000001A] text-black font-bold text-lg">
                                    01
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                                        Save time vetting property managers
                                    </h4>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        We've done the hard work so you don't have to. Just complete our
                                        questionnaire and we’ll match you quickly.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="px-[11px] py-[10px] rounded-full bg-white border border-[#0000001A] text-black font-bold text-lg">
                                    02
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                                        Access Verified, Top-Rated PM Companies
                                    </h4>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        Every property manager on our platform is carefully vetted for
                                        market fit, giving you peace of mind.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="px-[11px] py-[10px] rounded-full bg-white border border-[#0000001A] text-black font-bold text-lg">
                                    03
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                                        Receive clear, competitive proposals
                                    </h4>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        Compare offers from top PMs — all laid out clearly so you can
                                        choose with confidence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="px-[11px] py-[10px] rounded-full bg-white border border-[#0000001A] text-black font-bold text-lg">
                                    04
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                                        Increase Your Rental Income
                                    </h4>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        Our platform connects you with managers who specialize in
                                        maximizing occupancy and boosting your bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-8 px-6 py-3 bg-[#EF999A] text-white rounded-full shadow-md font-semibold hover:opacity-90 transition">
                            Get Started — It’s Free →
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>



    )
}

export default WhyChoose;