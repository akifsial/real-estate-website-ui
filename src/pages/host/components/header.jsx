
import React, { useState } from "react";
import logo from "../../../assets/svgs/logo.svg";
import { ReactSVG } from "react-svg";
import profileCircleSvg from "../../../assets/svgs/profile-circle.svg";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [selectedTab, setSelectedTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll to section func
  const handleScroll = (id) => {
    setSelectedTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };


  return (
    <header className="relative z-[99999] text-white">

      {/* ✅ Mobile Header */}
      <div className="header-visibility flex justify-end items-center mt-6 ps-[30px] pe-[30px]">
        <button onClick={toggleMenu} className="cursor-pointer text-white z-[1100]">
          {isMenuOpen ? "" : <Menu size={28} />}
        </button>
      </div>
      {/* ✅ Desktop Header */}
      <div className=" px-[135px] navbar-hide  gap-[20px] justify-between pt-[40px]">

        <div className="flex gap-[40px] items-center">
          <img className="w-[85px] h-[55px]" src={logo} alt="logo" />
          <div className="bg-[#00000040] w-[422px] flex justify-center rounded-full">
            <nav className="py-[25px] px-[32px]">
              <ul className="flex gap-[22px]">
                {[
                  { id: "", label: "Home" },
                  { id: "how-works", label: "How it works" },
                  { id: "why-choose", label: "Why choose us" },
                ].map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => handleScroll(tab.id)}

                    className={`cursor-pointer text-[16px] ${selectedTab === tab.id ? "font-bold" : "font-medium"
                      }`}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex gap-[20px] items-center">
          <button
            onClick={() => {
              location.pathname == "/" ?
                navigate("/host-website") : navigate("/")
            }}
            className="cursor-pointer flex items-center gap-[8px] text-white font-medium hover:text-[#EF999A]">
            <ReactSVG src={profileCircleSvg} />
            {
              location.pathname == "/" ?
                "Become a host" : "Become a pm"
            }
          </button>
          <button

            className='hover:bg-[#61b7d2] cursor-pointer bg-[#EF999A] rounded-full flex py-[10px] px-[24px] gap-[4px] text-white font-medium transition-colors duration-300 ease-in-out'
          >
            Get Started
          </button>
        </div>
      </div>



      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000e8] backdrop-blur-md p-6 flex flex-col gap-6 z-[1050] transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-8">
            <img className="w-[75px] h-[45px]" src={logo} alt="logo" />
            <button onClick={toggleMenu} className="cursor-pointer text-white">
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-white text-[18px]">
            {[
              { id: "home", label: "Home" },
              { id: "how-works", label: "How it works" },
              { id: "why-choose", label: "Why choose us" },
            ].map((tab) => (
              <li
                key={tab.id}
                onClick={() => {
                  handleScroll(tab.id)
                }}
                className={`cursor-pointer ${selectedTab === tab.id ? "font-bold" : "font-medium"
                  }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {
                location.pathname == "/" ?
                  navigate("/host-website") : navigate("/")
              }}
              className="cursor-pointer flex items-center gap-[8px] text-white font-medium">
              <ReactSVG src={profileCircleSvg} />
              {
                location.pathname == "/" ?
                  "Become a host" : "Become a pm"
              }
            </button>
            <button
              className='hover:bg-[#61b7d2] cursor-pointer bg-[#EF999A] rounded-full py-[10px] px-[24px] text-white font-medium transition-colors duration-300 ease-in-out'
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

