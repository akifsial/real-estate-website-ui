
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/03_image.png";
import image2 from "../../../assets/images/02_image.png";
import image3 from "../../../assets/images/01_image.png";

const steps = [
  {
    id: "01",
    title: "Complete the quick 2 minute property questionnaire.",
    text: "Fill out a short onboarding form with your property details and STR listing platform (Airbnb, Vrbo, etc.). We’ll verify your identity with SMS and email to keep everything secure.",
    image: image1,
  },
  {
    id: "02",
    title: "Receive three proposals from real top-rated property managers within three days.",
    text: "Our matching engine pairs you with the top 3 property managers based on location, service type, and performance score — all vetted and reviewed.",
    image: image2,
  },
  {
    id: "03",
    title: "Choose the best property manager with confidence. Process is simple, fast, and free.",
    text: "Once matched, HostSwitch lets you message, request proposals, and hire your ideal candidate. Pick the best and start managing stress-free.",
    image: image3,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-works"
      className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-[#F8E7EB] to-[#E3F5F8]"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[40px] md:text-3xl font-bold text-gray-800 playfair-display-uniquifier">
            How It Works
          </h2>
        </motion.div>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Our vision is simple: help hosts like you move from uncertainty
          to clarity with expert-matched property managers.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-1 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          // animation  from left or right index base
          const direction = index % 2 === 0 ? -100 : 100;
          return (
            <div className="overflow-hidden">

              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2, // stagger based on index
                }}
                className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  } items-start gap-10 backdrop-blur-sm p-6`}
              >
                {/* Left side: Number + Text */}
                <div className="flex-1 ps-5 border-l-[3px] border-[#A8DBE8]">
                  <h3 className="text-[70px] leading-none font-bold text-[#E3E3E3] mb-2">
                    {step.id}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 playfair-display-uniquifier">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Right side: Image */}
                <div className="flex-shrink-0">
                  <motion.img
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="rounded-xl shadow-md w-full md:w-[488px] md:h-[271px] h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;
