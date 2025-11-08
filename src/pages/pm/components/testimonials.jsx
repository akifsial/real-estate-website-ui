import { Star, StarHalfIcon, StarIcon } from 'lucide-react';
import React from 'react'
import star from "../../../assets/svgs/star.svg"
import { ReactSVG } from 'react-svg';
import google from "../../../assets/svgs/google.svg"
import { motion } from "framer-motion"
function testimonials() {

  const testimonials = [
    {
      name: "Luis Fonsi",
      role: "Airbnb Superhost",
      text: "HostSwitch made the entire process effortless. I submitted my property details and had proposals from three great managers within 48 hours. It saved me weeks.",
    },
    {
      name: "Justin Bieber",
      role: "Product Lead",
      text: "We’ve been able to grow our business by 30% in just two months, thanks to HostSwitch. The leads are high-quality, and the platform makes it easy to respond and stand out.",
    },
    {
      name: "Tommy Vercetti",
      role: "Vice Property Founder",
      text: "We’ve been able to grow our business by 30% in just two months, thanks to HostSwitch. The leads are high-quality, and the platform makes it easy to respond and stand out.",
    },
  ];


  return (
    <>
      <div className='pt-[80px] '>
        <div className='flex px-6 items-center justify-center'>
          <div className="overflow-hidden">

            <motion.div
              className="relative "
              // {...motionSettings}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >

              <div className='text-center mb-[50px] '>
                <p className='text-[15px] font-semibold text-[#4D72FF]'>TESTIMONIALS</p>
                <h2 className='font-bold playfair md:text-[40px] text-[30px] md:mt-0 mt-3 '>What Our Users Say</h2>
                <p className='font-light text-[16px] text-[#252525CC] max-w-[700px]'>Don’t just take our word for it. Hosts and property managers across the country are using HostSwitch to save time, build trust, and grow faster — all through one seamless platform.</p>
              </div>

            </motion.div>
          </div>


        </div>
        <div className="overflow-hidden">

          <motion.div
            className="relative "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className='flex justify-center '>

              <div className="px-6 md:px-16 lg:px-[135px]  py-14  pt-0">
                <div className="w-full mx-auto grid gap-[20px] md:grid-cols-3">
                  {testimonials.map((t, index) => (
                    <div
                      key={index}
                      className="bg-white w-full box-shadow rounded-2xl p-6 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 text-[#fbbf24]">
                        {[...Array(5)].map((_, i) => (

                          <ReactSVG src={star} />
                        ))}
                      </div>

                      {/* testimonial Text */}
                      <p className="text-[#252525] font-normal text-[16px] leading-relaxed mb-6">
                        “{t.text}”
                      </p>

                      {/* Footer */}
                      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={"https://avatar.iran.liara.run/public"}
                            alt={t.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-800 text-[15px]">{t.name}</p>
                            <p className="text-gray-500 text-[13px]">{t.role}</p>
                          </div>
                        </div>
                        <img src={google} className='w-10 h-10 ' alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div >
    </>
  )
}


export default testimonials; 