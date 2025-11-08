import React from "react";
import house1 from "../../../assets/images/house1.png"
import house2 from "../../../assets/images/house2.png"
import tick from "../../../assets/svgs/tick.svg"
import { ReactSVG } from "react-svg";


export default function MatchingLogic() {
  return (
    <section className="bg-gradient-to-r from-[#fbeaea] to-[#e6f1f7] md:py-20 py-10  px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl playfair lg:text-4xl font-bold text-gray-800">
          About our Matching Logic
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At HostSwitch, our intelligent matching algorithm connects property
          owners with the most suitable Property Managers (PMs) — not just based
          on location, but by understanding what truly matters.
        </p>
      </div>

    
      <div className="w-full flex justify-center">

      <div className="max-w-[1090px]">

        <div className="grid grid-cols-12 gap-[6px]">
          <div className="lg:col-span-4 col-span-12">
            <div className="grid gap-[8px] grid-cols-1">

              <div className="col-span-1">

                <div className="bg-white shadow-md rounded-[10px] pl-[30px] pt-[30px] pb-[14px]">

                  <h3 className="text-[16px] playfair font-bold mb-[10px] text-gray-900">
                    We consider key factors like:
                  </h3>
                  <ul className="space-y-1.5 text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-[14px]"><ReactSVG src={tick} /></span>
                      Market & Location
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-[14px]"><ReactSVG src={tick} /></span>
                      Property Type & Size
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-[14px]"><ReactSVG src={tick} /></span>
                      Services Needed
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-[14px]"><ReactSVG src={tick} /></span>
                      Company Reviews & Ratings
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-[14px]"><ReactSVG src={tick} /></span>
                      PM Past Performance
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1">

                <div className="">
                  <img
                    src={house2}
                    alt="Modern House 2"
                    className="rounded-2xl w-full lg:h-auto object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
          <div className=" lg:col-span-8 col-span-12">

            <img
              src={house1}
              alt="Modern House 2"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
