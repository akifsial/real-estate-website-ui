import React from "react";
import pm1 from "../../../assets/images/pm-1.jpg";
import arrowright from "../../../assets/svgs/arrow-right.svg";
import Button from "../../../components/button";
import leftline from "../../../assets/images/pm-line-left.png";
import rightline from "../../../assets/images/pm-line-right.png";
import { img } from "framer-motion/client";
import { motion } from "framer-motion";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Account & Get Verified.",
      description:
        "Join in just minutes, get verified, and start receiving high-quality, leads directly to your dashboard.",
    },
    {
      number: "02",
      title: "Get Qualified Leads with Photos & Insights",
      description:
        "Each lead includes property photos, performance data, and the owner's reason for switching managers.",
    },
    {
      number: "03",
      title: "Send Proposals & Connect with Owners",
      description:
        "Easily send proposals and start conversations with motivated owners ready to switch property managers.",
    },
    {
      number: "04",
      title: "Grow Your Portfolio  We Handle the Leads",
      description:
        "Focus on managing properties while we deliver verified homeowner leads straight to your dashboard.",
    },
  ];

  const motionSettings = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };


  return (
    <section
      className="md:py-16 py-12 px-6 md:px-20"
      id="how-works"
      style={{
        background: "linear-gradient(to right, #fbebeb 0%, #00000033 100%)",
      }}
    >
      <div className="flex md:p-[0px] p-[20px] rounded-[20px] h-[100%] bg-[#F8F9FF] flex-col lg:flex-row  gap-10 relative">
        <div className="overflow-hidden">

          <motion.div
            className="relative z-10"
            // initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            {...motionSettings}

            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <div
              className="lg:w-[437px] rounded-tl-[20px] rounded-bl-[20px] relative lg:h-[696px] h-full z-10 bg-cover bg-center overflow-hidden text-white"
              style={{
                backgroundImage: `url(${pm1})`,
              }}
            >
              <div className="absolute inset-0 bg-[#00000033]"></div>

              <div className="relative hidden md:block z-10 w-[383px] bg-[rgba(0,0,0,0.08)] backdrop-blur-md pb-[20px] px-[20px] rounded-2xl mx-auto mt-[60px] border border-[rgba(255,255,255,0.2)]">
                <h3 className="text-[36px] playfair-display-uniquifier font-semibold mb-3 text-white">
                  How It Works
                </h3>
                <p className="text-[14px] font-light leading-relaxed mb-6 opacity-90 text-white">
                  We’ve simplified the way Hosts connect with trusted Property
                  Managers. With our intelligent match system and user-friendly
                  dashboard, here’s how HostSwitch works for you — from onboarding
                  to proposal.
                </p>
                <Button
                  text="Get Started Its Free"
                  // className="bg-[#EF999A] cursor-pointer  hover:bg-[#ef999ad7]"
                  className='hover:bg-[#61b7d2] cursor-pointer bg-[#EF999A] rounded-full py-[10px] px-[24px] text-white font-medium transition-colors duration-300 ease-in-out'

                  icon={arrowright}
                  iconPosition="right"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto">
          <div className="md:pt-8 pt-0 lg:pr-8 pr-0">
            <div className="max-w-5xl mx-auto flex flex-col gap-[40px] relative">
              {steps.map((step, index) => {
                const isEven = index % 2 !== 0;
                const motionSettings =
                  index === 0
                    ? { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } }
                    : index === 1
                      ? { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } }
                      : index === 2
                        ? { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } }
                        : { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } };


                return (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                      } gap-[19px] `}
                  >


                    <div className="overflow-hidden">


                      <motion.div
                        key={index}
                        className={`relative flex flex-col items-center ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                          } gap-[19px]`}
                        initial={motionSettings.initial}
                        whileInView={motionSettings.animate}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                      >



                        <div
                          className="text-[60px] font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-[#f3b3b3] to-[#bcd3e9] flex-shrink-0"
                        >
                          {step.number}
                        </div>

                        <div className="bg-[#CCD7FF66] shadow-sm rounded-2xl px-[20px] py-[22px] w-full max-w-[452px]">
                          <h3 className="text-[16px] !font-bold playfair text-[#252525] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#252525] text-[16px] leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {index !== steps.length - 1 && (
                          <>
                            {isEven ? (
                              <img
                                src={rightline}
                                alt="line"
                                className="absolute top-[55%] right-[calc(100%)] hidden lg:block"
                              />
                            ) : (
                              <img
                                src={leftline}
                                alt="line"
                                className="absolute top-[55%] left-[calc(100%)] hidden lg:block"
                              />
                            )}
                          </>
                        )}

                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default HowItWorks;
