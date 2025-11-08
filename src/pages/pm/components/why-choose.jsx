import React from "react";
import house1 from "../../../assets/images/pm-2.jpg";
import { ReactSVG } from "react-svg";
import star from "../../../assets/svgs/star.svg";
import Button from "../../../components/button";
import arrowright from "../../../assets/svgs/arrow-right.svg";
import { motion } from "framer-motion";

function WhyChoose() {
  const steps = [
    {
      number: "01",
      title: "Trusted by homeowners nationwide",
      description:
        "Join a platform trusted by property owners across the country and get matched with serious leads.",
    },
    {
      number: "02",
      title: "Save time by letting us qualify leads for you",
      description:
        "Spend less time, we collect details so you're talking only to owners who are ready to make a change.",
    },
    {
      number: "03",
      title: "Close more deals by communicating directly with motivated owners",
      description:
        "Communicate directly with owners,send proposals, answer questions, and close deals faster.",
    },
  ];
  return (
    <section id="why-choose" className="px-6 md:px-16 lg:px-[135px] py-16 flex flex-col md:flex-row items-center bg-[#F7F6FF] md:gap-2 gap-10">
      {/* <!-- Right side: Text content --> */}
      <div className="overflow-hidden">

        <motion.div

          className="relative  z-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="w-full md:w-1/2">
            <h2 className="playfair-display-uniquifier text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Why Choose HostSwitch
            </h2>
            <p className="text-black text-[16px] mb-8">
              The smarter way to grow your property management business.
            </p>

            {/* <!-- Steps --> */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="px-[11px] py-[10px] rounded-full bg-white text-black border border-[#0000001A] raleway font-bold text-xl">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h4 className="font-bold playfair text-[16px] text-[#000]">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              text="Get Started It’s Free"
              className="bg-[#EF999A] mt-8 cursor-pointer hover:bg-[#ef999ad7]"
              icon={arrowright}
              iconPosition="right"
            />
          </div>
        </motion.div>
      </div>
      {/* <!-- Left side: Image --> */}

      <div className="w-full md:w-1/2">
        <div className="overflow-hidden">


          <motion.div
            className="relative z-10"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            initial={{ x: 50, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">

              <img
                src={house1}
                alt="Modern house"
                className="w-full md:h-[527px] h-[300px] object-cover rounded-2xl"
              />
              {/* <!-- Review Card on Image --> */}
              <div className="absolute right-5 sm:block bottom-6 bg-[#FFFFFF80] backdrop-blur-sm shadow-md rounded-md p-3 w-[80%]">
                <p className="text-[18px] text-black">
                  I got {" "}
                  <span className="font-semibold text-black">3 solid Matches</span>{" "}
                  within a day. Ended up increasing my monthly income by 40%.
                </p>
                <div className="flex items-center justify-start gap-1 mt-2 text-sm font-semibold text-[#0077b6]">
                  {Array(5)
                    .fill()
                    .map((_, i) => {
                      return (
                        <div key={i}>
                          {" "}
                          <ReactSVG src={star} />{" "}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

export default WhyChoose;
